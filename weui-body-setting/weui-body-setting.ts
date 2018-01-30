import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-body-setting',
    templateUrl: './weui-body-setting.html',
    styleUrls: ['./weui-body-setting.scss']
})
export class WeuiBodySettingComponent extends ReactComponent<any, any> {
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
