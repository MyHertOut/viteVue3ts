/* AppStore */
export type Language = 'zh-CN' | 'en-US'
export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export interface AppStore {
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