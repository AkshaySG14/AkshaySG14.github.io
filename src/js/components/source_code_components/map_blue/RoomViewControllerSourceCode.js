import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class RoomViewControllerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-swift">{`//
//  RoomViewController.swift
//  MapBlue
//
//  Created by Akshay Subramaniam on 8/3/18.
//  Copyright © 2018 MediocreAtBest. All rights reserved.
//

import UIKit

class RoomViewController: UIViewController {
    // Building label (changed programatically).
    @IBOutlet weak var buildingTitle: UILabel!
    // Back button and go button.
    @IBOutlet weak var backButton: UIButton!
    @IBOutlet weak var goButton: UIButton!
    // Different text fields.
    @IBOutlet weak var startRoomField: UITextField!
    @IBOutlet weak var destinationRoomField: UITextField!
    @IBOutlet weak var roomOneError: UILabel!
    @IBOutlet weak var roomTwoError: UILabel!
    // The building the controller is concerned with.
    private var building = 0

    // Sends data to the next view (Map Controller View).
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "gotoMap" {
            // Gets destination view controller as primary map view controller and uses the initialize function.
            if let destinationVC = segue.destination as? PrimaryMapViewController {
                // If start and dest are on same floor.
                if (getFloor(startRoomField.text!) == getFloor(destinationRoomField.text!)) {
                    destinationVC.initialize(building : building, floor : self.getFloor(self.startRoomField.text!), startRoom: self.startRoomField.text!, destRoom: self.destinationRoomField.text!)
                }
                // Else initialize with two floors.
                else {
                    destinationVC.initialize(building : building, floor1 : self.getFloor(self.startRoomField.text!), floor2: self.getFloor(self.destinationRoomField.text!), startRoom: self.startRoomField.text!, destRoom: self.destinationRoomField.text!)
                }
            }
        }
    }

    // Gets first digit of the room (which is essentially the floor).
    func getFloor(_ text : String) -> Int {
        return Int(text[0..<1])!
    }

    func noErrors() -> Bool {
        var check = true
        // Checks if room 1 text is empty.
        if (startRoomField.text == "") {
            check = false
            roomOneError.text = "Please enter a starting room"
        }
        // Checks if room does not exist.
        else if (!Building.relay.roomExists(building: building, room: startRoomField.text!)) {
            check = false
            roomOneError.text = "Room does not exist"
        }
        // Resets error status.
        else {
            roomOneError.text = ""
        }

        // Checks if room 2 text is empty.
        if (destinationRoomField.text == "") {
            check = false
            roomTwoError.text = "Please enter a destination room"
        }
        // Checks if room does not exist.
        else if (!Building.relay.roomExists(building: building, room: destinationRoomField.text!)) {
            check = false
            roomTwoError.text = "Room does not exist"
        }
        // Resets error status.
        else {
            roomTwoError.text = ""
        }
        // Checks if rooms are equivalent.
        if (check && Building.relay.getRoomValue(building: building, room: startRoomField.text!) == Building.relay.getRoomValue(building: building, room: destinationRoomField.text!) && getFloor(startRoomField.text!) == getFloor(destinationRoomField.text!)) {
            check = false
            roomOneError.text = "Rooms are in same location"
            roomTwoError.text = "Rooms are in the same location"
        }
        // Returns check.
        return check
    }

    @IBAction func GoMap(_ sender: Any) {
        // Checks for any errors in room or destination text field. If none, proceed to map screen.
        if (noErrors()) {
            performSegue(withIdentifier: "gotoMap", sender: sender)
        }
    }

    // Sets building to corresponding integer.
    func setBuilding(building : Int?) {
        self.building = building!
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Sets up the keyboard's dismissal upon screen being touched.
        setupKeyboard()
        // Sets label of room view controller.
        self.buildingTitle.text = "You are in " + Building.buildingMap.getBuildingName(building: building)
        // Initialize building room map.
        Building.relay.initRooms(building)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

// Extends text field so that typing enter exits keyboard.
extension RoomViewController: UITextFieldDelegate {
    // Upon pressing enter key, exit keyboard. Possible due to text field delegation.
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        self.view.endEditing(true)
        return false
    }
}`}
            </PrismCode>
        )
    }
}

export default RoomViewControllerSourceCode;