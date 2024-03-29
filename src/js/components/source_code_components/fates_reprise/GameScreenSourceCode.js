import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class GameScreenSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-java">{`package com.inoculates.fatesreprise.Screens;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.assets.AssetManager;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.*;
import com.badlogic.gdx.graphics.glutils.ShaderProgram;
import com.badlogic.gdx.maps.tiled.TiledMap;
import com.badlogic.gdx.maps.tiled.TiledMapTile;
import com.badlogic.gdx.maps.tiled.TiledMapTileLayer;
import com.badlogic.gdx.maps.tiled.TmxMapLoader;
import com.badlogic.gdx.maps.tiled.renderers.OrthogonalTiledMapRenderer;
import com.badlogic.gdx.maps.tiled.tiles.AnimatedTiledMapTile;
import com.badlogic.gdx.maps.tiled.tiles.StaticTiledMapTile;
import com.badlogic.gdx.math.MathUtils;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.TimeUtils;
import com.badlogic.gdx.utils.Timer;
import com.inoculates.fatesreprise.Characters.AdvSprite;
import com.inoculates.fatesreprise.Characters.*;
import com.inoculates.fatesreprise.Characters.Character;
import com.inoculates.fatesreprise.Consumables.Consumable;
import com.inoculates.fatesreprise.Effects.Effect;
import com.inoculates.fatesreprise.Events.MessengerMeeting;
import com.inoculates.fatesreprise.Fog.Mask;
import com.inoculates.fatesreprise.InputProcessor.DaurInput;
import com.inoculates.fatesreprise.Interactables.Interactable;
import com.inoculates.fatesreprise.Items.Item;
import com.inoculates.fatesreprise.MeleeWeapons.BasicSword;
import com.inoculates.fatesreprise.MeleeWeapons.MeleeWeapon;
import com.inoculates.fatesreprise.Projectiles.Projectile;
import com.inoculates.fatesreprise.Spells.Spell;
import com.inoculates.fatesreprise.Storage.Storage;
import com.inoculates.fatesreprise.Text.Dialogue;
import com.inoculates.fatesreprise.Text.TextBackground;
import com.inoculates.fatesreprise.UI.UI;
import com.inoculates.fatesreprise.Worlds.Houses;
import com.inoculates.fatesreprise.Worlds.UnderWorld;
import com.inoculates.fatesreprise.Worlds.UpperWorld;
import com.inoculates.fatesreprise.Worlds.World;

import java.util.ArrayList;
import java.util.Iterator;

// This is the game screen that is responsible for the rendering and updating of the game.
public class GameScreen implements Screen {
    // These objects are involved in the rendering of the map, except for the storage object, which stores information.
    public Batch batch;
    public OrthographicCamera camera;
    public TiledMap map;
    public TiledMapTile blankTile, springBushTile, summerBushTile, fallBushTile, winterBushTile, brambleTile, springGrassTile,
    summerGrassTile, fallGrassTile, winterGrassTile;
    public OrthogonalTiledMapRenderer renderer;
    public Storage storage;
    public UpperWorld world1;
    public UnderWorld world2;
    public Houses world3;

    // Daur's input processor.
    private DaurInput interpreter1;

    // The main character of the game.
    public Daur daur;
    // Mask that fades the game in and out.
    public Mask mask;
    // Defeat mask that is used only if Daur has lost.
    private Mask defeatMask;

    // All textures used for frames and animations. These are stored as texture atlases for compression and ease of use.
    public Array&lt;TextureAtlas&gt; daurAtlases = new Array&lt;TextureAtlas&gt;();
    public Array&lt;TextureAtlas&gt; characterAtlases = new Array&lt;TextureAtlas&gt;();
    public Array&lt;TextureAtlas&gt; miscAtlases = new Array&lt;TextureAtlas&gt;();

    // These are the rendering lists for the game. Each array list is iterated through to draw the object.
    public ArrayList&lt;Effect&gt; effects = new ArrayList&lt;Effect&gt;();
    public ArrayList&lt;Item&gt; items = new ArrayList&lt;Item&gt;();
    public ArrayList&lt;Spell&gt; spells = new ArrayList&lt;Spell&gt;();
    public ArrayList&lt;Projectile&gt; projectiles = new ArrayList&lt;Projectile&gt;();
    public ArrayList&lt;MeleeWeapon&gt; meleeWeapons = new ArrayList&lt;MeleeWeapon&gt;();
    public ArrayList&lt;Interactable&gt; interactables = new ArrayList&lt;Interactable&gt;();
    public ArrayList&lt;Consumable&gt; consumables = new ArrayList&lt;Consumable&gt;();
    public ArrayList&lt;Character&gt; characters1 = new ArrayList&lt;Character&gt;();
    public ArrayList&lt;Character&gt; characters2 = new ArrayList&lt;Character&gt;();
    public ArrayList&lt;Character&gt; characters3 = new ArrayList&lt;Character&gt;();
    public ArrayList&lt;Character&gt; charIterator = new ArrayList&lt;Character&gt;();
    public ArrayList&lt;Character&gt; drawnSprites = new ArrayList&lt;Character&gt;();
    public Array&lt;UI&gt; UIS = new Array&lt;UI&gt;();

    // These two objects are drawn to create the dialogue box.
    public Dialogue currentTextBox;
    public TextBackground textBackground;

    // The game class, which is what the libgdx program runs.
    private Game game;
    // The three shaders that are used in the game rendering. The inverted shader is responsible for rendering
    // wounded characters by inverting the color of the character. The current map shader is used to change how the
    // tile map is rendered based on the area Daur is in. The destruct shader is used for bosses or minibosses that
    // are dying.
    private ShaderProgram invertedShader;
    private ShaderProgram destructShader;
    private ShaderProgram currentMapShader;

    // This is the public timer for all objects that require a timer. The use of a single timer is to freeze it during
    // pauses.
    public Timer globalTimer = new Timer();
    // Delay used to freeze timer tasks.
    private long timerDelay;

    // This boolean stops the controls screen initiation from occurring too much. The paused boolean dictates whether
    // objects will update themselves. Paused essentially stops time.
    private boolean frozen = false, paused = false;

    // These are the layers of the tiledmap.
    private int[] fog = new int[] {0}, objects = new int[] {1}, foreground = new int[] {2}, background = new int[] {3};

    public GameScreen (Game game, Storage storage) {
		this.game = game;
        this.storage = storage;
        // Informs the storage object the current screen is the game screen.
        storage.setMainScreen(this);
        // Creates the renderer, the camera, and the batch.
        renderer = new OrthogonalTiledMapRenderer(null);
        camera = new OrthographicCamera();
        batch = renderer.getSpriteBatch();
        // Fills in the details of the world (characters, objects, etc).
        generateWorld();
        // Sets the interactable tiles of the world (bush and other things).
        setTiles();
        // Initializes the first input processor and the shaders.
        interpreter1 = new DaurInput(this, storage);
        // Inverted shader.
        invertedShader = new ShaderProgram(Gdx.files.internal("Shaders/character.vert"), Gdx.files.internal("Shaders/character.frag"));
        // Destruct shader (for minibosses and bosses).
        destructShader = new ShaderProgram(Gdx.files.internal("Shaders/character.vert"), Gdx.files.internal("Shaders/destruct.frag"));

        // Initializes tile map.
        setTileMap(0);
        // Get the layer and sets the camera position.
        TiledMapTileLayer layer = (TiledMapTileLayer) map.getLayers().get(0);
        camera.position.set(layer.getTileWidth() * ((storage.cellX) * 10) + layer.getTileWidth() * 5,
                layer.getTileHeight() * ((storage.cellY) * 10) + layer.getTileHeight() * 5, 0);

        // Does NOT allow any shading misspellings to stop the program.
        ShaderProgram.pedantic = false;
    }

    public void newGame() {
        // Sets tile map and then creates the beginning event: the messenger meeting.
        setTileMap(1);
        // Wipes all data.
        storage.wipe();
        // Beginning event.
        MessengerMeeting meeting = new MessengerMeeting(map, this);
        // Creates the quest events. They should all launch as none have been completed as of yet.
        world1.setQuestEvents();
        world2.setQuestEvents();
        world3.setQuestEvents();
    }

    public void loadGame() {
        // Makes storage load all the variables from the preferences.
        storage.loadVariables();
        // Sets the tile map in accordance with the one given by the storage.
        if (storage.map.equals(world1.getMap()))
            setTileMap(0);
        else if (storage.map.equals(world2.getMap()))
            setTileMap(1);
        else
            setTileMap(3);
        // Loads Daur into the game via his respawn point.
        daur = new Daur(this, map, daurAtlases.get(0));
        daur.setPosition(storage.respawnX, storage.respawnY);
        daur.setRespawnPoint();
        daur.setSpawnPoint(storage.respawnX, storage.respawnY);
        // Sets camera instantly and transitions.
        getWorld(map).setCameraInstantly();
        world1.setQuestEvents();
        world2.setQuestEvents();
        world3.setQuestEvents();
        transition(Color.BLACK);
        // Plays the proper music.
        getWorld(storage.map).checkMusicTransition();
    }

    // Sets the input processor and updates the mask.
	@Override
	public void show () {
        Gdx.input.setInputProcessor(interpreter1);
        mask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
        defeatMask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
    }

    // Renders all objects, and updates them.
	@Override
	public void render (float delta) {
        update();
        // Ensures that the camera's position rests on an int. This is to ensure that there is no tile shearing.
        camera.position.set(MathUtils.round(camera.position.x), MathUtils.round(camera.position.y), 0);
        camera.update();

        // Clears canvas and then renders the art over it.
        Gdx.gl.glClearColor(0, 0, 0, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
        // Sets the camera to the batch.
        batch.setProjectionMatrix(camera.combined);
        // Sets the shader of the batch.
        batch.setShader(currentMapShader);
        // Sets the view and renders all tile layers.
        renderer.setView(camera);
        renderer.render(fog);
        renderer.render(objects);
        renderer.render(foreground);
        renderer.render(background);
        batch.setShader(null);

        // Draws the sprites, animates the tiles, and gets rid of any stray objects.
        drawSprites();
        animateTiles();
        cleanInstances();
    }

    // Checks if a camera change is necessary (Daur is on the edge of the screen).
    private void update() {
        getWorld(map).checkCameraChange();
    }

    // Draws each sprite.
    private void drawSprites() {
        batch.begin();
        charIterator = new ArrayList&lt;Character&gt;();
        drawnSprites = new ArrayList&lt;Character&gt;();

        // Depending upon which world  the player currently is in, the screen adds every relevant character
        // (characters in the same cell as the player) to an array. This array helps with collision detection
        // for various sprites.
        if (getWorld(map).equals(world1))
            for (Character character : characters1)
                if (checkDraw(character))
                    charIterator.add(character);
        if (getWorld(map).equals(world2))
            for (Character character : characters2)
                if (checkDraw(character))
                    charIterator.add(character);
        if (getWorld(map).equals(world3))
            for (Character character : characters3)
                if (checkDraw(character))
                    charIterator.add(character);
        charIterator.add(daur);

        // Gets all sprites on the screen and then adds them to the drawnsprites array.
        for (Character character : charIterator)
                if (checkDraw(character))
                    drawnSprites.add(character);

        // Sets the filter of every tile that is rendered.
        Iterator&lt;TiledMapTile&gt; tiles = map.getTileSets().getTileSet("Tiles").iterator();
        while (tiles.hasNext()) {
            TiledMapTile tile = tiles.next();
            tile.getTextureRegion().getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
        }

        // Draws each consumable, assuming it is in the view of the player. Note that consumables are drawn first so that
        // everything in the game walks over them.
        for (Consumable consumable : consumables) {
            if (checkDraw(consumable)) {
                consumable.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                consumable.draw(batch);
            }
        }
        // Does the same for all interactables.
        for (Interactable interactable : interactables)
            if (checkDraw(interactable)) {
                checkSpriteShaded(interactable);
                interactable.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                interactable.draw(batch);
                batch.setShader(null);
            }
        // Checks if the character is within the cell Daur is in, and if so draws it. Additionally, checks if the
        // character needs to inverted. Finally, sets the filter of the character, and then draws it.
        // This is only for the characters of world 1.
        for (Character character : characters1)
            if (checkDraw(character) && getWorld(map).equals(world1)) {
                checkSpriteShaded(character);
                character.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                character.draw(batch);
                // Sets shader to null so that additional characters are not inverted.
                batch.setShader(null);
            }
        // For world 2.
        for (Character character : characters2)
            if (checkDraw(character) && getWorld(map).equals(world2)) {
                checkSpriteShaded(character);
                character.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                character.draw(batch);
                batch.setShader(null);
            }
        // World 3.
        for (Character character : characters3)
            if (checkDraw(character) && getWorld(map).equals(world3)) {
                checkSpriteShaded(character);
                character.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                character.draw(batch);
                batch.setShader(null);
            }
        // Checks if Daur himself needs inversion, sets the filter for his texture, and draws him. This occurs only if
        // Daur is alive.
        if (!daur.isDead()) {
            checkSpriteShaded(daur);
            daur.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
            daur.draw(batch);
            batch.setShader(null);
        }

        // Draws all relevant objects.

        for (Item item : items) {
            if (checkDraw(item)) {
                item.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                item.draw(batch);
            }
        }

        for (Spell spell : spells)
            if (checkDraw(spell)) {
                checkSpriteShaded(spell);
                spell.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                spell.draw(batch);
                batch.setShader(null);
            }

        for (Projectile projectile : projectiles)
            if (checkDraw(projectile)) {
                checkSpriteShaded(projectile);
                projectile.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                projectile.draw(batch);
                batch.setShader(null);
            }

        for (MeleeWeapon weapon : meleeWeapons)
            if (checkDraw(weapon) || weapon instanceof BasicSword) {
                checkSpriteShaded(weapon);
                weapon.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                weapon.draw(batch);
                batch.setShader(null);
            }

        for (Effect effect : effects)
            if (checkDraw(effect)) {
                checkSpriteShaded(effect);
                effect.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
                effect.draw(batch);
                batch.setShader(null);
            }

        for (UI ui : UIS) {
            ui.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
            ui.draw(batch);
        }

        // Draws the dialogue box background as well, if it exists.
        if (textBackground != null) {
            textBackground.draw(batch);
            // Also draws the extra line that houses extra information (red square or green arrow).
            textBackground.addition.draw(batch);
        }

        // Also displays text if the text box is not null.
        if (currentTextBox != null)
            currentTextBox.displayText();

        // Renders the fog layer last. This is so that the layer is drawn ON TOP of any objects, including Daur.
        renderer.renderTileLayer((TiledMapTileLayer) map.getLayers().get(3));

        // Draws the defeat mask to obscure all but Daur, if necessary.
        defeatMask.draw(batch);

        // If Daur is dead, draws him above the fog layer and the defeat mask so that he is the only thing visible when
        // dead.
        if (daur.isDead()) {
            checkSpriteShaded(daur);
            daur.getTexture().setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.MipMapNearestLinear);
            daur.draw(batch);
            batch.setShader(null);
        }

        // Draws the mask even above the fog, to obscure everything.
        mask.draw(batch);
        batch.end();
    }

    // Checks if the sprite is inverted or destructing. If not, draws the sprite with the current shader.
    private void checkSpriteShaded(AdvSprite advSprite) {
        if (advSprite.getInverted())
            batch.setShader(invertedShader);
        else if (advSprite.getDestructing())
            batch.setShader(destructShader);
        else
            batch.setShader(currentMapShader);
    }

    // Animates all animated tiles.
    private void animateTiles() {
        animateTile("springflowers", "Foreground", "Tiles", 0.5f);
        animateTile("summerflowers", "Foreground", "Tiles", 0.5f);
        animateTile("autumnflowers", "Foreground", "Tiles", 0.5f);
        animateTile("winterflowers", "Foreground", "Tiles", 0.5f);
        animateTile("shallowwater", "Background", "Tiles", 0.125f);
        animateTile("water", "Background", "Tiles", 0.125f);
        animateTile("deepwater", "Background", "Tiles", 0.125f);
        animateTile("fountaintopleft", "Objects", "Tiles", 0.25f);
        animateTile("fountaintopright", "Objects", "Tiles", 0.25f);
        animateTile("fountainbottomleft", "Objects", "Tiles", 0.25f);
        animateTile("fountainbottomright", "Objects", "Tiles", 0.25f);
        animateTile("torch", "Objects", "Tiles", 0.4f);
        animateTile("redhead", "Fog", "Tiles", 0.5f);
        animateTile("bluehead", "Fog", "Tiles", 0.5f);
        animateTile("yellowhead", "Fog", "Tiles", 0.5f);
        animateTile("greenhead", "Fog", "Tiles", 0.5f);
        animateTile("slowtile", "Objects", "Tiles", 0.3333333f);
    }

	@Override
	public void hide () {
	}

    // This resizes the camera and window of the game.
    @Override
    public void resize (int width, int height) {
        TiledMapTileLayer layer = (TiledMapTileLayer) map.getLayers().get(0);
        camera.viewportWidth = layer.getTileWidth() * 10;
        camera.viewportHeight = layer.getTileHeight() * 11;
        camera.position.set(MathUtils.round(camera.position.x), MathUtils.round(camera.position.y), 0);
        camera.update();
    }

    @Override
    public void pause () {
    }

    @Override
    public void resume () {
    }

    @Override
    public void dispose () {
        map.dispose();
        renderer.dispose();
        daur.getTexture().dispose();
    }

    // This gets the respective tiles for every interactable tile. NOTE: this is the tile type, not each individual
    // cell.
    private void setTiles() {
        Iterator&lt;TiledMapTile&gt; tiles = world1.getMap().getTileSets().getTileSet("Tiles").iterator();
        // Gets the bush tiles.
        while (tiles.hasNext()) {
            TiledMapTile tile = tiles.next();
            if (tile.getProperties().containsKey("blank"))
                blankTile = tile;
            if (tile.getProperties().containsKey("bush")) {
                if (tile.getProperties().containsKey("spring"))
                    springBushTile = tile;
                if (tile.getProperties().containsKey("summer"))
                    summerBushTile = tile;
                if (tile.getProperties().containsKey("autumn"))
                    fallBushTile = tile;
                if (tile.getProperties().containsKey("winter"))
                    winterBushTile = tile;
            }
            // Gets all other types of tiles.
            if (tile.getProperties().containsKey("bramble"))
                brambleTile = tile;
            if (tile.getProperties().containsKey("springgrass"))
                springGrassTile = tile;
            if (tile.getProperties().containsKey("summergrass"))
                summerGrassTile = tile;
            if (tile.getProperties().containsKey("fallgrass"))
                fallGrassTile = tile;
            if (tile.getProperties().containsKey("wintergrass"))
                winterGrassTile = tile;
        }
    }

    // This loads all the objects in the game, as well as the fonts of the game.
    public void generateWorld() {
        loadObjects();
        createWorlds();
    }

    // This method finds all non-static tiles and animates them.
    private void animateTile(String key, String section, String tileset, float time) {
        Array&lt;StaticTiledMapTile&gt; frameTiles = new Array&lt;StaticTiledMapTile&gt;();
        Iterator&lt;TiledMapTile&gt; tiles = map.getTileSets().getTileSet(tileset).iterator();

        while (tiles.hasNext()) {
            TiledMapTile tile = tiles.next();
            if (tile.getProperties().containsKey(key))
            frameTiles.add((StaticTiledMapTile) tile);
        }

        AnimatedTiledMapTile animatedTile = new AnimatedTiledMapTile(time, frameTiles);
        for (TiledMapTile tile : frameTiles)
            animatedTile.getProperties().putAll(tile.getProperties());

        TiledMapTileLayer layer = (TiledMapTileLayer) map.getLayers().get(section);

        for (int i = 0; i &lt; layer.getWidth(); i++) {
            for (int o = 0; o &lt; layer.getHeight(); o++) {
                TiledMapTileLayer.Cell cell = layer.getCell(i, o);
                if (cell != null && cell.getTile() != null && cell.getTile().getProperties().containsKey(key))
                    cell.setTile(animatedTile);
            }
        }
    }

    // Loads all the textures the game requires.
    private void loadObjects() {
        AssetManager manager = new AssetManager();
        manager.load("SpriteSheets/Daur.pack", TextureAtlas.class);
        manager.load("SpriteSheets/MiscChars.pack", TextureAtlas.class);
        manager.load("SpriteSheets/Villagers.pack", TextureAtlas.class);
        manager.load("SpriteSheets/Enemies.pack", TextureAtlas.class);
        manager.load("UI/UI.pack", TextureAtlas.class);
        manager.load("Items/Items.pack", TextureAtlas.class);
        manager.load("Effects/Effects.pack", TextureAtlas.class);
        manager.load("Spells/Spells.pack", TextureAtlas.class);
        manager.load("Projectiles/Projectiles.pack", TextureAtlas.class);
        manager.load("Interactables/Interactables.pack", TextureAtlas.class);
        manager.load("Consumables/Consumables.pack", TextureAtlas.class);
        manager.load("Tiles/Tiles.pack", TextureAtlas.class);
        manager.finishLoading();

        daurAtlases.add((TextureAtlas) manager.get("SpriteSheets/Daur.pack"));
        daurAtlases.add((TextureAtlas) manager.get("UI/UI.pack"));
        daurAtlases.add((TextureAtlas) manager.get("Items/Items.pack"));
        daurAtlases.add((TextureAtlas) manager.get("Effects/Effects.pack"));
        daurAtlases.add((TextureAtlas) manager.get("Spells/Spells.pack"));
        daurAtlases.add((TextureAtlas) manager.get("Projectiles/Projectiles.pack"));
        characterAtlases.add((TextureAtlas) manager.get("SpriteSheets/MiscChars.pack"));
        characterAtlases.add((TextureAtlas) manager.get("SpriteSheets/Villagers.pack"));
        characterAtlases.add((TextureAtlas) manager.get("SpriteSheets/Enemies.pack"));
        miscAtlases.add((TextureAtlas) manager.get("Interactables/Interactables.pack"));
        miscAtlases.add((TextureAtlas) manager.get("Consumables/Consumables.pack"));
        miscAtlases.add((TextureAtlas) manager.get("Tiles/Tiles.pack"));
    }

    public void setDaur(Daur daur) {
        this.daur = daur;
    }

    // Checks if the object is in the screen, so that it may be drawn. This reduces lag of the game.
    private boolean checkDraw(Sprite sprite) {
        // Checks if the sprite is a character, and is ignoring the camera. If so, returns.
        if (sprite instanceof Character && ((Character) sprite).isIgnoringCamera())
            return true;

        float posX = camera.position.x, posY = camera.position.y;
        float width = camera.viewportWidth / 2, height = camera.viewportHeight / 2;
        return sprite.getX() + sprite.getWidth() &gt; posX - width && sprite.getX() &lt; posX + width &&
                sprite.getY() + sprite.getHeight() &gt; posY - height && sprite.getY() &lt; posY + height;
    }

    // Returns true if object is drawn (is in the camera). Otherwise, returns false
    public boolean isInView(Sprite sprite) {
        return checkDraw(sprite);
    }

    // Cleans up all objects that are not in the current cell and are not persistent. Note that a separate array list
    // is created for each type to iterate through. This is because the object could not be removed from the list it was
    // iterating from.
    public void cleanInstances() {
        ArrayList&lt;Effect&gt; effectPlaceholder = new ArrayList&lt;Effect&gt;();

        for (Effect effect : effects)
            effectPlaceholder.add(effect);

        for (Effect effect : effectPlaceholder)
            if (!checkDraw(effect) && !effect.isPersistent())
                effects.remove(effect);

        ArrayList&lt;Consumable&gt; consumablePlaceholder = new ArrayList&lt;Consumable&gt;();

        for (Consumable consumable : consumables)
            consumablePlaceholder.add(consumable);

        for (Consumable consumable : consumablePlaceholder)
            if (!checkDraw(consumable))
                consumables.remove(consumable);

        ArrayList&lt;Spell&gt; spellPlaceholder = new ArrayList&lt;Spell&gt;();

        for (Spell spell : spells)
            spellPlaceholder.add(spell);

        for (Spell spell : spellPlaceholder)
            if (!checkDraw(spell))
                spells.remove(spell);

        ArrayList&lt;Projectile&gt; projectilePlaceholder = new ArrayList&lt;Projectile&gt;();

        for (Projectile projectile : projectiles)
            projectilePlaceholder.add(projectile);

        for (Projectile projectile : projectilePlaceholder)
            if (!checkDraw(projectile))
                projectiles.remove(projectile);

        ArrayList&lt;MeleeWeapon&gt; weaponPlaceholder = new ArrayList&lt;MeleeWeapon&gt;();

        for (MeleeWeapon weapon : meleeWeapons)
            weaponPlaceholder.add(weapon);

        for (MeleeWeapon weapon : weaponPlaceholder)
            if (!checkDraw(weapon))
                meleeWeapons.remove(weapon);
    }

    // Sets the current text box and the background to the given one.
    public void setText(Dialogue dialogue, TextBackground background) {
        currentTextBox = dialogue;
        textBackground = background;
    }

    // Sets the tile map, which is decided by the given world.
    public void setTileMap(int world) {
        // Removes up all refreshable instances (enemies, interactables, etc).
        world1.cleanRenewables();
        world2.cleanRenewables();
        world3.cleanRenewables();

        // Renews the refreshable instances that were just destroyed, depending on the current world. Also checks for
        // music transitions.
        if (world == 0) {
            map = world1.getMap();
            world1.createRenewables();
        }
        else if (world == 1) {
            map = world2.getMap();
            world2.createRenewables();
        }
        else {
            map = world3.getMap();
            world3.createRenewables();
        }

        // Sets map of the renderer and storage. Also creates a new mask.
        renderer.setMap(map);
        storage.setMap(map);
        mask = new Mask();
        defeatMask = new Mask();

        // Sets camera for each world.
        world1.setCamera(camera);
        world2.setCamera(camera);
        world3.setCamera(camera);

        // Gets the camera width and height, and updates it.
        TiledMapTileLayer layer = (TiledMapTileLayer) map.getLayers().get(0);
        camera.viewportWidth = (int) layer.getTileWidth() * 10;
        camera.viewportHeight = (int) layer.getTileHeight() * 11;
        // Ensures that the camera's position rests on an int. This is to ensure that there is no tile shearing.
        camera.position.set(MathUtils.round(camera.position.x), MathUtils.round(camera.position.y), 0);
        camera.update();
    }

    // Adds a sprite to the rendering list based on the world the sprite is supposed to be in. This avoids concurrent
    // modifications of the rendering lists.
    public void addCharacter(Character character, int world) {
        switch (world) {
            case 0:
                characters1.add(character);
                break;
            case 1:
                characters2.add(character);
                break;
            case 2:
                characters3.add(character);
                break;
        }
    }

    // Creates each world, giving it the tile map, storage, and camera.
    private void createWorlds() {
        // Texture filters for the tiles.
        TmxMapLoader.Parameters params = new TmxMapLoader.Parameters();
        params.textureMagFilter = Texture.TextureFilter.Nearest;
        params.textureMinFilter = Texture.TextureFilter.Nearest;
        // Creates the worlds, along with their maps.
        world1 = new UpperWorld(storage, camera, new TmxMapLoader().load("TileMaps/Overworld.tmx", params), this);
        world2 = new UnderWorld(storage, camera, new TmxMapLoader().load("TileMaps/Underworld.tmx", params), this);
        world3 = new Houses(storage, camera, new TmxMapLoader().load("TileMaps/Houses.tmx", params), this);
    }

    public void pauseGame() {
        // Gets the time when the timer is stopped.
        timerDelay = TimeUtils.nanosToMillis(TimeUtils.nanoTime());
        // Stops all timed events, to prevent events from firing while the game is paused.
        globalTimer.stop();
        // Sets screen to pause.
        PausedScreenGame screen = new PausedScreenGame(game, storage, this);
        game.setScreen(screen);
    }

    // Similar to the pauseGame method, except concerning maps.
    public void goToMap() {
        // Gets the time when the timer is stopped.
        timerDelay = TimeUtils.nanosToMillis(TimeUtils.nanoTime());
        // Stops all timed events, to prevent events from firing while the game is paused.
        globalTimer.stop();
        // Sets screen to the overworld map if in the overworld, or the respective dungeon map. Does not work in a house.
        if (getWorld(map) instanceof UpperWorld) {
            OverworldMapScreen screen = new OverworldMapScreen(game, storage, this);
            game.setScreen(screen);
        }
        // For the dungeon map.
        else if (getWorld(map) instanceof UnderWorld) {
            UnderworldMapScreen screen = new UnderworldMapScreen(game, storage, this);
            game.setScreen(screen);
        }
    }

    public void unPauseGame() {
        // Delays all events by the current time - the timerDelay. This is to prevent timed events from starting
        // immediately.
        globalTimer.delay(TimeUtils.nanosToMillis(TimeUtils.nanoTime()) - timerDelay);
        // Restarts all timed events.
        globalTimer.start();
        // Sets screen back.
        game.setScreen(this);
        // Resets the masks size, regardless if necessary.
        mask.setSize(160, 176);
        // Sets mask to current camera position and renews the position of all UI's so that they display properly.
        mask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
        defeatMask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
        for (UI ui : UIS)
            ui.renewPosition();
    }

    public void defeat() {
        // Gets the time when the timer is stopped.
        timerDelay = TimeUtils.nanosToMillis(TimeUtils.nanoTime());
        // Stops all timed events, to prevent events from firing while the game is paused.
        globalTimer.stop();
        // Sets screen to the defeat screen.
        DefeatScreen screen = new DefeatScreen(game, storage, this);
        game.setScreen(screen);
    }

    // Gets the world, depending on the current tile map.
    public World getWorld(TiledMap map) {
        if (map.equals(world1.getMap()))
            return world1;
        if (map.equals(world2.getMap()))
            return world2;
        else
            return world3;
    }

    // Shakes the screen by moving the camera back and forth.
    public void shakeScreen(final float displacement, float time, boolean sound) {
        // Shakes to the right.
        globalTimer.scheduleTask(new Timer.Task() {
            @Override
            public void run() {
                camera.position.set(camera.position.x + displacement / 2, camera.position.y, 0);
            }
        }, time);

        // Creates a loop that shakes back to the left every x time.
        for (float i = time * 2; i &lt;= time * 9; i += time * 2)
            globalTimer.scheduleTask(new Timer.Task() {
                @Override
                public void run() {
                    camera.position.set(camera.position.x - displacement, camera.position.y, 0);
                }
            }, i);
        // Creates a loop that shakes back to the right every x + 1 (other) time.
        for (float i = time * 3; i &lt;= time * 9; i += time * 2)
            globalTimer.scheduleTask(new Timer.Task() {
                @Override
                public void run() {
                    camera.position.set(camera.position.x + displacement, camera.position.y, 0);
                }
            }, i);
        // Creates a loop to create remor sounds. Notice the interval is much longer than the previous two loops. This
        // only occurs if the sound boolean is true.
        if (sound)
            for (float i = time * 2; i &lt;= time * 9; i += time * 3)
                globalTimer.scheduleTask(new Timer.Task() {
                    @Override
                    public void run() {
                        // Plays tremor sound.
                        storage.sounds.get("tremor2").play(1.0f);
                    }
                }, i);
        // Moves back to the original position.
        globalTimer.scheduleTask(new Timer.Task() {
            @Override
            public void run() {
                camera.position.set(camera.position.x - displacement / 2, camera.position.y, 0);
            }
        }, time * 10);
    }

    // This method causes the defeat mask to immediately become opaque or transparent, depending on the parameter given.
    public void defeatMask(boolean in) {
        defeatMask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
        if (in)
            defeatMask.setAlpha(1);
        else
            defeatMask.setAlpha(0);
    }

    // This method causes the screen to fade to the given color, then fade out once again.
    public void transition(Color color) {
        // Sets color of the mask, makes it opaque, and sets the position to the camera position.
        mask.setColor(color);
        mask.setAlpha(1);
        mask.setPosition(camera.position.x - camera.viewportWidth / 2, camera.position.y - camera.viewportHeight / 2);
        daur.freeze();
        daur.setTransitioning(true);
        // Creates a globalTimer event that unstuns Daur, breaks the game out of transitioning, sets the mask to be
        // transparent, and finally renews every UI position.
        globalTimer.scheduleTask(new Timer.Task() {
            @Override
            public void run() {
                daur.setTransitioning(false);
                mask.setAlpha(0);
                for (UI ui : UIS)
                    ui.renewPosition();
            }
        }, 0.4f);
    }

    // Relays check clears to all short term memory classes.
    public void checkClear(Sprite sprite) {
        storage.FDstorage.checkClear(sprite);
    }

    // Relays clears to all short term memory classes.
    public void clearEvents() {
        storage.FDstorage.clearEvents();
    }

    public void setCurrentMapShader(ShaderProgram shader) {
        currentMapShader = shader;
    }

    public void resetProcessor() {
        Gdx.input.setInputProcessor(interpreter1);
    }

    public boolean isFrozen() {
        return frozen;
    }

    public boolean isPaused() {
        return paused;
    }

    public void freeze() {
        frozen = true;
    }

    public void pauseScreen() {
        paused = true;
    }

    public void unFreeze() {
        frozen = false;
    }

    public void unPauseScreen() {
        paused = false;
    }
}`}
            </PrismCode>
        )
    }
}

export default GameScreenSourceCode;