declare namespace flax {
    var assetsManager;
    var ASSET_MOVIE_CLIP;
    function init(resolutionPolicy, initialUserData?, designSize?);
    function registerFont(name, path);

    export class FlaxSprite extends cc.Node {
        constructor(assetsFile: string, assetID: string);
        public ctor(assetsFile?: string, assetID?: any);
        onAnimationOver;
        onSequenceOver;
        onFrameChanged;
        onFrameLabel;
        autoDestroyWhenOver: boolean;
        autoStopWhenOver: boolean;
        autoHideWhenOver: boolean;
        autoRecycle: boolean;
        currentFrame: number;
        currentAnim;
        totalFrames: number;
        frameInterval: number;
        ignoreBodyRotation: boolean;
        define;
        name;
        assetsFile;
        assetID;
        clsName: string;
        playing: boolean;

        public setSource(assetsFile: string, assetID: string);
        public setFpsForAnim(anim, fps);
        public addFrameSound(frame, sound);
        public removeFrameSound(frame);
        public getLabels(label);
        public hasLabel(label);
        public getMainCollider();
        public getCollider(name);
        public getRect(coordinate);
        public debugDraw();
        public getCenter(coordinate);
        public getAnchor(name);
        public bindAnchor(anchorName, node, alwaysBind);
        public unbindAnchor(anchorNameOrNode, autoDestroy);
        public getCurrentLabel();
        public nextFrame();
        public prevFrame();
        public play();
        public playSequence(anims);
        public playSequenceLoop(anims);
        public stopSequence();
        public gotoAndPlay(frameOrLabel, forcePlay?);
        public stop();
        public gotoAndStop(frameOrLabel);
        public setFPS(f);
        public getFPS();
        public updatePlaying(state);
        public updateSchedule()
        public onFrame(delta);
        public isValideFrame(frame);
        public renderFrame(frame, forceUpdate);
        public doRenderFrame(frame);
        public onEnter();
        public onExit();
        public setPosition(pos, yValue);
        public setPositionX(x);
        public setPositionY(y);
        public destroy();
        public onRecycle();
        public isMouseEnabled();
        public setMouseEnabled(value);
        public getDefine();
        public onNewSource();
        public getTag();
        public static create: any;
    }

    export class Animator extends FlaxSprite {
        constructor(assetsFile, assetID);
        frameNames;
        clsName;
        public onNewSource();
        public doRenderFrame(frame);
        public getDefine();
    }

    export class FlaxSpriteBatch extends cc.SpriteBatchNode {
        constructor(assetsFile, assetID);
    }

    export class MovieClip extends FlaxSprite {
        clsName: any;
        sameFpsForChildren: any;
        createChildFromPool: boolean;
        _autoPlayChildren: boolean;
        namedChildren: any;
        fps: number;
        public replaceChild(childName, assetID, assetsFile);
        public getFrameData(childName, frame);
        public setOpacity(opacity);
        public setColor(color);
        public onNewSource();
        public onEnter();
        public doRenderFrame(frame);
        public stop();
        public play();
        public getAutoPlayChildren();
        public setAutoPlayChildren(v);
        public onNewChild(child);
        public getDefine();
        public getChild(name, nest);
        public getChildByAssetID(id);
        public getLabelText(labelName, ifNest);
        public setLabelText(labelName, text, ifNest);
        public setFPS(f);
        public onRecycle();
        public static extend(object: any);
        public static create: any;
        constructor(assetsFile: string, assetID: string);
        public ctor(assetsFile: string, assetID: any);
    }
}