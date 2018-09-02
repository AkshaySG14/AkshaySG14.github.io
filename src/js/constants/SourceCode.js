import React from "react";

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import BodyContainerSourceCode from "../components/source_code_components/home/BodyContainerSourceCode";
import MainNavBarContainerSourceCodeComponent from "../components/source_code_components/home/MainNavBarContainerSourceCode";
import SidebarContainerSourceCode from "../components/source_code_components/home/SidebarContainerSourceCode";
import SourceCodeContainerSourceCode from "../components/source_code_components/home/SourceCodeContainerSourceCode";
import LinksContainerSourceCode from "../components/source_code_components/home/LinksContainerSourceCode";
import SummaryContainerSourceCode from "../components/source_code_components/home/SummaryContainerSourceCode";

import DaurSourceCode from "../components/source_code_components/fates_reprise/DaurSourceCode";
import WorldSourceCode from "../components/source_code_components/fates_reprise/WorldSourceCode";
import StorageSourceCode from "../components/source_code_components/fates_reprise/StorageSourceCode";
import GameScreenSourceCode from "../components/source_code_components/fates_reprise/GameScreenSourceCode";
import BeetleSourceCode from "../components/source_code_components/fates_reprise/BeetleSourceCode";
import WizardSourceCode from "../components/source_code_components/fates_reprise/WizardSourceCode";
import BuildingViewControllerSourceCode from "../components/source_code_components/map_blue/BuildingViewControllerSourceCode";
import MapViewControllerSourceCode from "../components/source_code_components/map_blue/MapViewControllerSourceCode";
import PrimaryMapViewControllerSourceCode from "../components/source_code_components/map_blue/PrimaryMapViewControllerSourceCode";
import RoomViewControllerSourceCode from "../components/source_code_components/map_blue/RoomViewControllerSourceCode";
import PointSourceCode from "../components/source_code_components/map_blue/PointSourceCode";
import EECSHandlerSourceCode from "../components/source_code_components/map_blue/EECSHandlerSourceCode";
import PlayerSourceCode from "../components/source_code_components/dark_and_light/PlayerSourceCode";
import CharacterSourceCode from "../components/source_code_components/dark_and_light/CharacterSourceCode";
import LightHandlerSourceCode from "../components/source_code_components/dark_and_light/LightHandler";
import LightBoxSourceCode from "../components/source_code_components/dark_and_light/LightBox";
import YellowLighterSourceCode from "../components/source_code_components/dark_and_light/YellowLighter";
import CircleGameSourceCode from "../components/source_code_components/memori/CircleGameSourceCode";
import CircleGameViewSourceCode from "../components/source_code_components/memori/CircleGameViewSourceCode";
import InitializerSourceCode from "../components/source_code_components/memori/InitializerSourceCode";
import LevelSelectSourceCode from "../components/source_code_components/memori/LevelSelectSourceCode";
import BitmapManagerSourceCode from "../components/source_code_components/memori/BitmapManagerSourceCode";
import SoundManagerSourceCode from "../components/source_code_components/memori/SoundManagerSourceCode";
import PixelKnightSourceCode from "../components/source_code_components/pixel_knight/PixelKnightSourceCode";
import MudSourceCode from "../components/source_code_components/pixel_knight/MudSourceCode";
import ChargerSourceCode from "../components/source_code_components/pixel_knight/ChargerSourceCode";
import MainSourceCode from "../components/source_code_components/color_synthesizer/MainSourceCode";
import ColorManagerHeaderSourceCode from "../components/source_code_components/color_synthesizer/ColorManagerHeaderSourceCode";
import ColorManagerImplementationSourceCode from "../components/source_code_components/color_synthesizer/ColorManagerImplementationSourceCode";
import CursorManagerHeaderSourceCode from "../components/source_code_components/color_synthesizer/CursorManagerHeaderSourceCode";
import CursorManagerImplementationSourceCode from "../components/source_code_components/color_synthesizer/CursorManagerImplementationSourceCode";
import WindowManagerImplementationSourceCode from "../components/source_code_components/color_synthesizer/WindowManagerImplementationSourceCode";
import TextEncryptorHeaderSourceCode from "../components/source_code_components/document_encryptor/TextEncryptorHeaderSourceCode";
import TextEncryptorImplementationSourceCode from "../components/source_code_components/document_encryptor/TextEncryptorImplementationSourceCode";
import EncryptorSourceCode from "../components/source_code_components/document_encryptor/EncryptorSourceCode";
import DecryptorSourceCode from "../components/source_code_components/document_encryptor/DecryptorSourceCode";
import CipherSourceCode from "../components/source_code_components/document_encryptor/CipherSourceCode";
import ColumnarTranspositionSourceCode from "../components/source_code_components/document_encryptor/ColumnarTranspositionSourceCode";
import RunManagerHeaderSourceCode from "../components/source_code_components/file_encryptor/RunManagerHeaderSourceCode";
import RunManagerImplementationSourceCode from "../components/source_code_components/file_encryptor/RunManagerImplementationSourceCode";
import FEEncryptorSourceCode from "../components/source_code_components/file_encryptor/EncryptorSourceCode";
import FEDecryptorSourceCode from "../components/source_code_components/file_encryptor/DecryptorSourceCode";
import EncryptionHandlerSourceCode from "../components/source_code_components/file_encryptor/EncryptionHandlerSourceCode";
import DecryptionHandlerSourceCode from "../components/source_code_components/file_encryptor/DecryptionHandlerSourceCode";
import CarHandlerSourceCode from "../components/source_code_components/traffic_director/CarHandlerSourceCode";
import DirectorSourceCode from "../components/source_code_components/traffic_director/DirectorSourceCode";
import GraphicsHelperSourceCode from "../components/source_code_components/traffic_director/GraphicsHelperSourceCode";
import CameraSourceCode from "../components/source_code_components/space_shooter/CameraSourceCode";
import MapSourceCode from "../components/source_code_components/space_shooter/MapSourceCode";
import SSSourceCode from "../components/source_code_components/space_shooter/PlayerSourceCode";
import EnemySourceCode from "../components/source_code_components/space_shooter/EnemySourceCode";
import XShooterSourceCode from "../components/source_code_components/space_shooter/XShooterSourceCode";
import MissileLauncherSourceCode from "../components/source_code_components/space_shooter/MissileLauncher";

export const SOURCE_CODE_NAMES = {
    [HOME]: [
        "BodyContainer.jsx",
        "MainNavBarContainer.jsx",
        "SidebarContainer.jsx",
        "SourceCodeContainer.jsx",
        "LinksContainer.jsx",
        "SummaryContainer.jsx"
    ],
    [FR]: [
        "Daur.java",
        "GameScreen.java",
        "Storage.java",
        "World.java",
        "Beetle.java",
        "Wizard.java"
    ],
    [MB]: [
        "BuildingViewController.swift",
        "MapViewController.swift",
        "PrimaryMapViewController.swift",
        "RoomViewController.swift",
        "Point.swift",
        "EECSHandler.swift"
    ],
    [DA]: [
        "Player.java",
        "Character.java",
        "GameScreen.java",
        "LightHandler.java",
        "LightBox.java",
        "YellowLighter.java"
    ],
    [MM]: [
        "CircleGame.java",
        "CircleGameView.java",
        "Initializer.java",
        "LevelSelect.java",
        "BitmapManager.java",
        "SoundManager.java"
    ],
    [PK]: [
        "PixelKnight.java",
        "GameScreen.java",
        "Storage.java",
        "World.java",
        "Mud.java",
        "Charger.java"
    ],
    [CS]: [
        "Main.cpp",
        "ColorManager.h",
        "ColorManager.cpp",
        "CursorManager.h",
        "CursorManager.cpp",
        "WindowManager.cpp"
    ],
    [DE]: [
        "TextEncryptor.h",
        "TextEncryptor.cpp",
        "Encryptor.cpp",
        "Decryptor.cpp",
        "Cipher.cpp",
        "ColumnarTransposition.cpp"
    ],
    [FE]: [
        "RunManager.h",
        "RunManager.cpp",
        "Encryptor.cpp",
        "Decryptor.cpp",
        "EncryptionHandler.cpp",
        "DecryptionHandler.cpp"
    ],
    [TD]: [
        "Director.py",
        "CarHandler.py",
        "GraphicsHelper.py"
    ],
    [SS]: [
        "Player.rb",
        "Camera.rb",
        "Map.rb",
        "Enemy.rb",
        "XShooter.rb",
        "MissileLauncher.rb"
    ]
};

export const SOURCE_CODE_COMPONENTS = {
    [HOME]: [
        <BodyContainerSourceCode/>,
        <MainNavBarContainerSourceCodeComponent/>,
        <SidebarContainerSourceCode/>,
        <SourceCodeContainerSourceCode/>,
        <LinksContainerSourceCode/>,
        <SummaryContainerSourceCode/>
    ],
    [FR]: [
        <DaurSourceCode/>,
        <GameScreenSourceCode/>,
        <StorageSourceCode/>,
        <WorldSourceCode/>,
        <BeetleSourceCode/>,
        <WizardSourceCode/>
    ],
    [MB]: [
        <BuildingViewControllerSourceCode/>,
        <MapViewControllerSourceCode/>,
        <PrimaryMapViewControllerSourceCode/>,
        <RoomViewControllerSourceCode/>,
        <PointSourceCode/>,
        <EECSHandlerSourceCode/>
    ],
    [DA]: [
        <PlayerSourceCode/>,
        <CharacterSourceCode/>,
        <GameScreenSourceCode/>,
        <LightHandlerSourceCode/>,
        <LightBoxSourceCode/>,
        <YellowLighterSourceCode/>
    ],
    [MM]: [
        <CircleGameSourceCode/>,
        <CircleGameViewSourceCode/>,
        <InitializerSourceCode/>,
        <LevelSelectSourceCode/>,
        <BitmapManagerSourceCode/>,
        <SoundManagerSourceCode/>
    ],
    [PK]: [
        <PixelKnightSourceCode/>,
        <GameScreenSourceCode/>,
        <StorageSourceCode/>,
        <WorldSourceCode/>,
        <MudSourceCode/>,
        <ChargerSourceCode/>
    ],
    [CS]: [
        <MainSourceCode/>,
        <ColorManagerHeaderSourceCode/>,
        <ColorManagerImplementationSourceCode/>,
        <CursorManagerHeaderSourceCode/>,
        <CursorManagerImplementationSourceCode/>,
        <WindowManagerImplementationSourceCode/>
    ],
    [DE]: [
        <TextEncryptorHeaderSourceCode/>,
        <TextEncryptorImplementationSourceCode/>,
        <EncryptorSourceCode/>,
        <DecryptorSourceCode/>,
        <CipherSourceCode/>,
        <ColumnarTranspositionSourceCode/>
    ],
    [FE]: [
        <RunManagerHeaderSourceCode/>,
        <RunManagerImplementationSourceCode/>,
        <FEEncryptorSourceCode/>,
        <FEDecryptorSourceCode/>,
        <EncryptionHandlerSourceCode/>,
        <DecryptionHandlerSourceCode/>
    ],
    [TD]: [
        <DirectorSourceCode/>,
        <CarHandlerSourceCode/>,
        <GraphicsHelperSourceCode/>
    ],
    [SS]: [
        <SSSourceCode/>,
        <CameraSourceCode/>,
        <MapSourceCode/>,
        <EnemySourceCode/>,
        <XShooterSourceCode/>,
        <MissileLauncherSourceCode/>,
    ]
};