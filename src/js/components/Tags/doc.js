import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils/prop-types';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      'A list of tags that can be removed.'
    ).usage(`
    $ npm install grommet-controls\n
    import { Tags } from 'grommet-controls';\n
    <Tags />
    `);

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    children: PropTypes.func.description(
      'Function that will be called when each option is rendered.'
    ),
    focusable: PropTypes.bool.description(
      'Whether the tag list is focusable',
    ),
    icon: PropTypes.element.description('Icon element to remove the tag.'),
    tagProps: PropTypes.object.description('Tag elements `<Box />` and `<Text />` properties'),
    onChange: PropTypes.func.description(
      'Function that will be called when the user removes a tag.'
    ),
    onClick: PropTypes.func.description(
      'Function that will be called when the user clicks on a tag.'
    ),
    direction: PropTypes.oneOf(['row', 'row-responsive', 'column']).description(
      'The orientation to layout the child tags in.'
    ).defaultValue('column'),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.'
    ),
    value: PropTypes.oneOfType([
      PropTypes.string, PropTypes.element, PropTypes.object,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string, PropTypes.element, PropTypes.object,
      ])),
    ]).description('List of tag items to display.'),
  };

  return DocumentedElement;
};
