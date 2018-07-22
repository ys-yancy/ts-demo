interface TabPaneProps {
    tab: string;
    order: number;
    disabled?: boolean;
    isActive?: boolean;
    className?: string;
    activeIndex?: number;
}

interface TabNavProps {
    panels: any;
    activeIndex: number;
    onTabClick(order: number): void;
};

interface TabContentProps {
    panels: any;
    activeIndex: number;
}

interface TabsProps {
    children: any;
    tabNavIsTop?: boolean;
    className?: string;
    activeIndex?: number;
    defauleActiveIndex?: number;
    onChange(activeIndex: number): void;
}


export {
    TabPaneProps,
    TabNavProps,
    TabContentProps,
    TabsProps,
}