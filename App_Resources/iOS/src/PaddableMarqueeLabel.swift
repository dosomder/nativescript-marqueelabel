import MarqueeLabel

/**
* The method to add padding to label does not work with MarqueeLabel. These properties were added to prevent crashes with NativeScript.
*
* Links:
* https://stackoverflow.com/questions/27459746/adding-space-padding-to-a-uilabel
* https://stackoverflow.com/questions/3476646/uilabel-text-margin
*/

@IBDesignable class PaddableMarqueeLabel: MarqueeLabel {
    // currently not supported, use margin instead
    @objc var padding: UIEdgeInsets {
        get {
            return UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        }
        set {
        }
    }

    // currently not supported
    @objc var borderThickness: UIEdgeInsets {
        get {
            return UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
        }
        set {
        }
    }
}