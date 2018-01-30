```ts
import { WeuiBodyPreviewComponent, WeuiBodyDefault } from './weui-body-preview/weui-body-preview';
import { WeuiBodySettingComponent } from './weui-body-setting/weui-body-setting';

export const both = {
    'weui-body': {
        setting: WeuiBodySettingComponent,
        view: WeuiBodyPreviewComponent,
        default: WeuiBodyDefault
    }
};

export const preview = {
    'weui-body': WeuiBodyPreviewComponent
};

export const entrys = [
    WeuiBodySettingComponent,
    WeuiBodyPreviewComponent
];

export { WeuiBodyDefault } from './weui-body-preview/weui-body-preview';
```