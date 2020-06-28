declare class PaddableMarqueeLabel extends MarqueeLabel {
  static alloc(): PaddableMarqueeLabel; // inherited from NSObject

  static appearance(): PaddableMarqueeLabel; // inherited from UIAppearance

  static appearanceForTraitCollection(
    trait: UITraitCollection
  ): PaddableMarqueeLabel; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): PaddableMarqueeLabel; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): PaddableMarqueeLabel; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): PaddableMarqueeLabel; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): PaddableMarqueeLabel; // inherited from UIAppearance

  static new(): PaddableMarqueeLabel; // inherited from NSObject

  padding: UIEdgeInsets;
}

declare var PaddableMarqueeLabelVersionNumber: number;

declare var PaddableMarqueeLabelVersionString: interop.Reference<number>;
