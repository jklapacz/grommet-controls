import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils/prop-types';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A masked Input control with an optional drop button with the specified \'dropContent\'.').usage(`
    $ npm install grommet-controls\n
    import { MakedInput } from 'grommet-controls';\n
    <MakedInput mask={...} />
    `);

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    a11yDropTitle: PropTypes.string.description(
      'Custom drop button title to be used by screen readers.'
    ),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.'
    ),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).description('Value for the field.'),
    id: PropTypes.string.description('The id attribute of the input.'),
    name: PropTypes.string.description('The name attribute of the input.'),
    disabled: PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    onChange: PropTypes.func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    plain: PropTypes.bool.description(
      `Whether this is a plain input with no border or padding.
Only use this when the containing context provides sufficient affordance`
    ),
    mask: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func,
      PropTypes.bool,
      PropTypes.shape({
        mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        pipe: PropTypes.func,
      }),
    ]).description('An array or a function that defines how the user input is going to be masked.'),
    guide: PropTypes.bool.description('When masked, a boolean that tells the component whether to be in guide or no guide mode.'),
    pipe: PropTypes.func.description('When masked, a function that will give you the opportunity to modify the conformed value before it is displayed on the screen.'),
    placeholderChar: PropTypes.string.description('When masked, represents the fillable spot in the mask.'),
    keepCharPositions: PropTypes.bool.description(
      `For masked. When true, adding or deleting characters will not affect the positions of existing characters.
      When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back.`
    ),
    showMask: PropTypes.bool.description('When masked, displays the mask as a placeholder in place of the regular placeholder.'),
    dropContent: PropTypes.element.description('Content to put inside the Drop.'),
    dropIcon: PropTypes.element.description('Icon for drop content.'),
    widgets: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.element.isRequired,
    })).description('Additional widgets to be placed next to the input.'),
    onClose: PropTypes.func.description('Callback for when the drop is closed'),
  };

  return DocumentedElement;
};
