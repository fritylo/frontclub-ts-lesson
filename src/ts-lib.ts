interface ILinkProps {
    className: string;
    href: string;
    onClick: () => void;
}

interface IMyLinkProps extends Omit<ILinkProps, 'onClick' | 'href'> {
    onClick: (index: number) => void;
}

const props: IMyLinkProps = {
    className: '',
    onClick(index) {},
};

type A = Pick<ILinkProps, 'href' | 'className'>;

type Colors = 'red' | 'teal' | 'pink' | 'purple' | 'yellow' | 'black';
type ColorsWithoutRed = Exclude<Colors, 'red'>;

type FuncSum = (a: number, b: number) => { a: number, b: number, res: number };
type FuncSumReturn = ReturnType<FuncSum>;

type ColorUpper = Uppercase<Colors>;

type ColorToggles = {
    [Key in `$${Capitalize<Colors>}`]?: boolean;
}

const colorToggles: ColorToggles = {
    $Black: true,
    //red: true,
}


