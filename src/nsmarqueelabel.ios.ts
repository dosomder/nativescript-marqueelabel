import { CSSType } from "tns-core-modules/ui/text-base";
import { Label as LabelDefinition } from "tns-core-modules/ui/label";

@CSSType("NSMarqueeLabel")
export class NSMarqueeLabel extends LabelDefinition {
  nativeViewProtected: PaddableMarqueeLabel;

  public createNativeView() {
    const view = PaddableMarqueeLabel.new();
    view.scrollRate = 24.0;
    view.fadeLength = 6.0;
    view.userInteractionEnabled = true;

    return view;
  }

  get ios(): PaddableMarqueeLabel {
    return this.nativeTextViewProtected;
  }
}
// @ts-ignore
NSMarqueeLabel.prototype.recycleNativeView = "auto";
