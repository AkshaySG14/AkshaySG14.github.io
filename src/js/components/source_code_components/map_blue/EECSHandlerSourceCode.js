import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class EECSHandlerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-swift">{`//
//  EECSHandler.swift
//  MapBlue
//
//  Created by Akshay Subramaniam on 8/4/18.
//  Copyright © 2018 MediocreAtBest. All rights reserved.
//
import Foundation

import UIKit

class EECSHandler : Handler {
    private var nodeHandler = EECSNodeHandler()
    private var roomHandler = EECSRoomHandler()
    private var pointHandler = EECSPointHandler()

    // Init functions.
    func initNodes(_ floor : Int) {
        nodeHandler.initNodes(floor)
    }

    func initRooms() {
        roomHandler.initbuildingRoomMap()
    }

    func initPoints(building : Int, floor : Int) {
        pointHandler.initPointMap(building: building, floor: floor)
    }

    // Get functions.
    func getRoomMap() -> [String:Int] {
        return roomHandler.getRoomMap()
    }

    func getNodes() -> [Point] {
        return nodeHandler.getNodes()
    }

    func getPointMap() -> [Int:Point] {
        return pointHandler.getPointMap()
    }

    // Point Map functions.
    // Get stairs function.
    func getStairs(building : Int, floor : Int) -> [Point] {
        return pointHandler.getStairs(building : building, floor: floor)
    }

    // Get nearest node function.
    func getNearestNode(point : Point, nodes : [Point]) -> Point {
        return pointHandler.getNearestNode(point: point, nodes: nodes)
    }

    // Room Map functions.
    func roomExists(_ room : String) -> Bool {
        return roomHandler.roomExists(room)
    }

    func roomEquals(room1 : String, room2 : String) -> Bool {
        return roomHandler.roomEquals(room1: room1, room2: room2)
    }

    func getRoomValue(_ room : String) -> Int {
        return roomHandler.getRoomValue(room)
    }

    // Node functions.
    func addMutualNeighbors(one : Point, two : Point) {
        nodeHandler.addMutualNeighbors(one: one, two: two)
    }
}`}
            </PrismCode>
        )
    }
}

export default EECSHandlerSourceCode;