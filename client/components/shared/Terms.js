import styles from '../../styles/components/shared/Terms.module.css';

const variantsMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    caption: 'p',
    nav: 'p',
    menu: 'p',
    footer: 'p',
};

const Terms = ({
    variant: variantProp,
    color: colorProp,
    className: classes,
    children,
    ...props
}) => {
    const Component = variantProp ? variantsMapping[variantProp] : 'p';
    const variant = variantProp ? variantProp : 'body';
    const color = colorProp ? colorProp : 'default';
    const classNames = [`${styles[variant]} ${styles[color]}`, classes].join(' ');

    return (
        <Component className={classNames} {...props}>
            {children}
        </Component>
    );
};

export default Terms;
