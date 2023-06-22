import { startWidget } from "./modules/widgetservice.js";

const initWidget = (app) => {
    const widget = startWidget();
    app.append(widget);
}


initWidget(document.querySelector('#app'));
