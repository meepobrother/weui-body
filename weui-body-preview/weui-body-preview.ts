import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiBodyProps { }
export class WeuiBodyDefault { }
@Component({
    selector: 'weui-body-preview',
    templateUrl: './weui-body-preview.html',
    styleUrls: ['./weui-body-preview.scss']
})
export class WeuiBodyPreviewComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
