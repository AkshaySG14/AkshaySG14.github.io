import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class PrimaryMapViewControllerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-swift">{`//
//  MapViewController.swift
//  MapBlue
//
//  Created by Akshay Subramaniam on 14/3/18.
//  Copyright © 2018 MediocreAtBest. All rights reserved.
//

import UIKit
import CoreMotion

class MapViewController: UIViewController {
    internal var building = 0
    internal var floor = 0
    internal var startRoom = "0"
    internal var destRoom = "0"

    @IBOutlet weak var mapTitle: UILabel!
    @IBOutlet weak var mapImage: UIImageView!
    // Constraints for Indicator Images.
    // Top and Leading
    @IBOutlet weak var startIndicatorImageTop: NSLayoutConstraint!
    @IBOutlet weak var startIndicatorImageLeading: NSLayoutConstraint!
    @IBOutlet weak var destIndicatorImageTop: NSLayoutConstraint!
    @IBOutlet weak var destIndicatorImageLeading: NSLayoutConstraint!
    // Indicator Images.
    @IBOutlet weak var startIndicatorImage: UIImageView!
    @IBOutlet weak var destIndicatorImage: UIImageView!
    // Indicator Points.
    internal var startPoint = Point(x: 0, y: 0)
    internal var destPoint = Point(x: 0, y: 0)
    // Point Nodes.
    internal var points : [Point] = []
    // Point Images.
    internal var pointNodes : [UIImageView] = []
    // Point centers.
    internal var pointCenters : [CGPoint] = []
    // Scroll view.
    @IBOutlet weak var scrollView: UIScrollView!
    // Center of the indicators.
    internal var startIndicatorViewCenter : CGPoint = CGPoint.zero
    internal var destIndicatorViewBottom : CGPoint = CGPoint.zero

    // Sets relevant variables. This is when the floor is the same for both start and end rooms.
    func initialize(building : Int, floor : Int, startRoom : String, destRoom : String) {
        self.building = building
        self.floor = floor
        self.startRoom = startRoom
        self.destRoom = destRoom
    }

    // Set position of the markers.
    func setMarkerPositions() {
        // Gets the point map.
        let pointMap = Building.relay.getPointMap(building)
        // Sets the starting location of each indicator (start and end).
        self.startPoint = pointMap[Building.relay.getRoomValue(building: building, room: startRoom)]!
        // If on the same floor, set as ending point normally, else get the stairs position.
        self.destPoint = pointMap[Building.relay.getRoomValue(building: building, room: destRoom)]!

        self.startIndicatorImageLeading.constant = startPoint.x
        self.startIndicatorImageTop.constant = startPoint.y

        self.destIndicatorImageLeading.constant = destPoint.x
        self.destIndicatorImageTop.constant = destPoint.y - destIndicatorImage.frame.height / 2
        self.view.layoutIfNeeded()
    }

    // Adds relevant points.
    func setPoints() {
        // Gets the points that links starting to destination.
        startPoint.getFirstNeighbor().getNodeList(dest : destPoint.getFirstNeighbor(), from : startPoint, nodes : &points)
        for point in self.points {
            // Creates the image of the point itself and sets frame accordingly.
            let imageName = "Point.png"
            let image = UIImage(named: imageName)
            let imageView = UIImageView(image: image!)
            imageView.translatesAutoresizingMaskIntoConstraints = false
            imageView.frame = CGRect(x: 0, y: 0, width: 20, height: 20)
            // Adds image UI element to the scroll view.
            self.scrollView.addSubview(imageView)
            // Sets the constraints of the image. This is important because without these constraints the initial position would be impossible to set.
            let widthConstraint = NSLayoutConstraint(item: imageView, attribute: NSLayoutAttribute.width, relatedBy: NSLayoutRelation.equal, toItem: nil, attribute: NSLayoutAttribute.width, multiplier: 1.0, constant: 15)
            let heightConstraint = NSLayoutConstraint(item: imageView, attribute: NSLayoutAttribute.height, relatedBy: NSLayoutRelation.equal, toItem: nil, attribute: NSLayoutAttribute.height, multiplier: 1.0, constant: 15)
            let leadingConstraint = NSLayoutConstraint(item: imageView, attribute: NSLayoutAttribute.leading, relatedBy: NSLayoutRelation.equal, toItem: self.scrollView, attribute: NSLayoutAttribute.leading, multiplier: 1.0, constant: point.x)
            let topConstraint = NSLayoutConstraint(item: imageView, attribute: NSLayoutAttribute.top, relatedBy: NSLayoutRelation.equal, toItem: self.scrollView, attribute: NSLayoutAttribute.top, multiplier: 1.0, constant: point.y)
            NSLayoutConstraint.activate([widthConstraint, heightConstraint, leadingConstraint, topConstraint])
            // Updates view.
            self.view.layoutIfNeeded()
            // Appends the image to the image list, and the center of the image to the center point list.
            pointNodes.append(imageView)
            pointCenters.append(imageView.center)
        }
    }

    // Initializes all points from the be.
    func setPointChain() {
        Building.relay.addMutualNeighbors(building: building, one: startPoint, two: Building.relay.getNearestNode(building: building, point: startPoint, nodes: Building.relay.getNodes(building)))
        Building.relay.addMutualNeighbors(building: building, one: destPoint, two: Building.relay.getNearestNode(building: building, point: destPoint, nodes: Building.relay.getNodes(building)))
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Sets the map image itself.
        mapImage.image = UIImage(named: getImage(building: building, floor: floor))
        // Initializes all points.
        Building.relay.initPoints(building: building, floor: floor)
        // Initializes all nodes.
        Building.relay.initNodes(building: building, floor: floor)
        self.mapTitle.text = Building.buildingMap.getBuildingName(building: building) + " Floor " + String(self.floor) + " Map"
        // Set marker starting positions.
        self.setMarkerPositions()
        // Sets indicator centers.
        self.startIndicatorViewCenter = startIndicatorImage.center
        self.destIndicatorViewBottom = CGPoint(x: destIndicatorImage.center.x, y: destIndicatorImage.center.y + destIndicatorImage.frame.height / 2)
        // Sets content size of scroll view.
        self.scrollView.contentSize = self.mapImage.frame.size
        // Set neighbors of starting and ending indicator.
        setPointChain()
        // Set the point positions.
        setPoints()
    }

    // Sets initial constants.
    override func viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        updateMinZoomScaleForSize(scrollView.bounds.size)
    }

    // Sets the scroll view to have a consistent zoom scale. This is to prevent over or under zooming.
    fileprivate func updateMinZoomScaleForSize(_ size: CGSize) {
        let widthScale = size.width / self.mapImage.bounds.width
        let heightScale = size.height / self.mapImage.bounds.height
        let minScale = min(widthScale, heightScale)

        scrollView.minimumZoomScale = minScale
        scrollView.zoomScale = minScale

        // Obtains the offset value.
        let scaleAffineTransform = scrollView.transform.scaledBy(x: scrollView.zoomScale, y: scrollView.zoomScale)

        // Translates all indicators accordingly.
        var translatedPoint = startIndicatorViewCenter.applying(scaleAffineTransform)
        self.startIndicatorImage.transform = scrollView.transform.translatedBy(x: translatedPoint.x - startIndicatorViewCenter.x, y: translatedPoint.y + 100 - startIndicatorViewCenter.y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)

        translatedPoint = destIndicatorViewBottom.applying(scaleAffineTransform)
        self.destIndicatorImage.transform = scrollView.transform.translatedBy(x: translatedPoint.x - destIndicatorViewBottom.x, y: translatedPoint.y + 100 - destIndicatorViewBottom.y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)

        // Translates all points accordingly.
        if (!pointNodes.isEmpty) {
            for index in 0...pointNodes.count - 1 {
                translatedPoint = pointCenters[index].applying(scaleAffineTransform)
                pointNodes[index].transform = scrollView.transform.translatedBy(x: translatedPoint.x - pointCenters[index].x, y: translatedPoint.y + 100 - pointCenters[index].y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)
            }
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

// Various zoom functions.
extension MapViewController: UIScrollViewDelegate {
    // Links the map to be zoomed in on.
    func viewForZooming(in scrollView: UIScrollView) -> UIView? {
        return mapImage
    }

    // Called when user zooms and upon initialization.
    func scrollViewDidZoom(_ scrollView: UIScrollView) {
        // Gets the offset value.
        let scaleAffineTransform = scrollView.transform.scaledBy(x: scrollView.zoomScale, y: scrollView.zoomScale)

        // Translates all indicators accordingly.
        var translatedPoint = startIndicatorViewCenter.applying(scaleAffineTransform)
        self.startIndicatorImage.transform = scrollView.transform.translatedBy(x: translatedPoint.x - startIndicatorViewCenter.x, y: translatedPoint.y + 100 - startIndicatorViewCenter.y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)

        translatedPoint = destIndicatorViewBottom.applying(scaleAffineTransform)
        self.destIndicatorImage.transform = scrollView.transform.translatedBy(x: translatedPoint.x - destIndicatorViewBottom.x, y: translatedPoint.y + 100 - destIndicatorViewBottom.y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)

        // Translates all points accordingly.
        if (!pointNodes.isEmpty) {
            for index in 0...pointNodes.count - 1 {
                translatedPoint = pointCenters[index].applying(scaleAffineTransform)
                pointNodes[index].transform = scrollView.transform.translatedBy(x: translatedPoint.x - pointCenters[index].x, y: translatedPoint.y + 100 - pointCenters[index].y).scaledBy(x: 0.5 + scrollView.zoomScale, y: 0.5 + scrollView.zoomScale)
            }
        }
    }

    // Reset content size of scroll view.
    func scrollViewDidEndZooming(_ scrollView: UIScrollView, with view: UIView?, atScale scale: CGFloat) {
        let scaleAffineTransform = scrollView.transform.scaledBy(x: scale, y: scale)
        self.scrollView.contentSize = self.mapImage.bounds.size.applying(scaleAffineTransform)
        self.scrollView.contentSize.height = self.scrollView.contentSize.height * 1.1 // Account for bottom portion.
    }
}`}
            </PrismCode>
        )
    }
}

export default PrimaryMapViewControllerSourceCode;