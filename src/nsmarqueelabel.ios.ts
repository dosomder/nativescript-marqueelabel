import { Label } from "tns-core-modules/ui/label";

export class NSMarqueeLabel extends Label {
  public createNativeView() {
    const view = TNSLabel.new();
    view.userInteractionEnabled = true;

    return view;
  }
}
