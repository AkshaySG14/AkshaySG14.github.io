import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class PointSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-swift">{`//
//  Point.swift
//  MapBlue
//
//  Created by James Jiang on 3/23/18.
//  Copyright © 2018 MediocreAtBest. All rights reserved.
//

import Foundation

import UIKit

class Point {
    var x : CGFloat = 0
    var y : CGFloat = 0
    var neighbors: [Point] = []

    init(x: CGFloat, y: CGFloat) {
        self.x = x
        self.y = y
    }

    static func getDistance(a : Point, b : Point) -> CGFloat
    {
        return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2)).rounded()
    }

    func getNodeList(dest : Point, from : Point, nodes : inout [Point]) -> Bool {
        if (self.neighbors.count == 0) {
            return false
        }
        // This point is the destination point.
        if (self == dest) {
            nodes.append(self)
            return true
        }
        // Removes point connection from neighbors to avoid counting it.
        self.neighbors.remove(at: getPoint(point: from, nodes: self.neighbors))
        // Check if point no longer has neighbors.
        while (self.neighbors.count > 0) {
            // Get the next point (nearest point to destination)
            let nP = self.nextPoint(dest: dest)
            // Remove point from neighbors.
            self.neighbors.remove(at: getPoint(point: nP, nodes: self.neighbors))
            // If the node does not lead to dead end, add this node the list.
            if (nP.getNodeList(dest: dest, from: self, nodes: &nodes)) {
                nodes.append(self)
                return true
            }
        }
        // This node leads to a dead end every way.
        return false
    }

    // Gets the first neighbor of the point. Used for start and end indicators.
    func getFirstNeighbor() -> Point {
        return self.neighbors[0]
    }

    private func nextPoint(dest : Point) -> Point
    {
        var bestPoint = neighbors[0]
        var bestDist = Point.getDistance(a: neighbors[0], b: dest)
        for point in neighbors
        {
            if (Point.getDistance(a: point, b: dest) <  bestDist)
            {
                bestPoint = point
                bestDist = Point.getDistance(a: point, b: dest)
            }
        }
        return bestPoint
    }

    private func getPoint(point : Point, nodes : [Point]) -> Int {
        for index in 0...nodes.count - 1 {
            if (nodes[index] == point) {
                return index
            }
        }
        return -1
    }
}

func ==(left: Point, right: Point) -> Bool {
    return left.x == right.x && left.y == right.y
}`}
            </PrismCode>
        )
    }
}

export default PointSourceCode;