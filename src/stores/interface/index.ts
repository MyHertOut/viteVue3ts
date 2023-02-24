/* GlobalState */
export interface GlobalState {
	token: string;
	weChatUserInfo: any;
	language: string;
	themeConfig: ThemeConfigProps;
}

/* themeConfigProp */
export interface ThemeConfigProps {
	layout: LayoutType;
	isCollapse: boolean;
	breadcrumb: boolean;
	breadcrumbIcon: boolean;
	tabs: boolean;
	tabsIcon: boolean;
	footer: boolean;
}

export type LayoutType = "vertical" | "classic" | "transverse" | "columns";