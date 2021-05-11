import styles from '../../styles/components/shared/Typography.module.css';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'p',
  menu: 'p',
  'apply-menu': 'p',
  footer: 'p',
};

const Typography = ({
  variant: variantProp,
  color: colorProp,
  className: classes,
  children,
  ...props
}) => {
  const Component = variantProp ? variantsMapping[variantProp] : 'p';
  const variant = variantProp ? variantProp : 'body';
  const color = colorProp ? colorProp : 'default';
  const classNames = [
    `${styles[variant]} ${styles[color]}`,
    'whitespace-pre-line',
    classes,
  ].join(' ');

  return (
    <Component
      className={`${classNames} ${
        color === 'default' ? 'text-darkMatter dark:text-white' : ''
      }`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
