import { TypeLayout, TypeSpacing } from '@/constants/spacing';

class styleHelper {
  static destructSpacing = (props: TypeSpacing = {}) => {
    const {
      mr,
      mrX,
      mrY,
      mrL,
      mrR,
      mrT,
      mrB,
      pd,
      pdX,
      pdY,
      pdL,
      pdR,
      pdT,
      pdB,
      ...remaining
    } = props;
    const spacing = {
      margin: mr,
      marginLeft: mrL,
      marginRight: mrR,
      marginTop: mrT,
      marginBottom: mrB,
      marginX: mrX,
      marginY: mrY,
      padding: pd,
      paddingLeft: pdL,
      paddingRight: pdR,
      paddingTop: pdT,
      paddingBottom: pdB,
      paddingX: pdX,
      paddingY: pdY,
    };

    return {
      spacing,
      remaining,
    };
  };

  static destructLayout = (props: TypeLayout = {}) => {
    const style: any = {};

    if (props.dp) {
      style.display = props.dp;
      if (props.dp === 'flex') {
        style.flexDirection = 'column';
      }
    }
    delete props.dp;

    let direction: any = props.row ? 'row' : '';
    if (direction && props.reverse) {
      direction += '-reverse';
    }
    if (direction) {
      style.display = 'flex';
      style.flexDirection = direction;
    }
    delete props.row;
    delete props.reverse;
    delete props.direction;

    if (props.center) {
      style.alignItems = 'center';
      style.justifyContent = 'center';
    } else {
      if (props.alignItems) {
        style.alignItems =
          props.alignItems === true ? 'center' : props.alignItems;
      }

      if (props.justifyContent) {
        style.justifyContent =
          props.justifyContent === true ? 'center' : props.justifyContent;
      }
    }
    delete props.center;
    delete props.justifyContent;
    delete props.alignItems;

    if (props.alignSelf) {
      style.alignSelf = props.alignSelf === true ? 'center' : props.alignSelf;
    }
    delete props.alignSelf;

    if (props.flex) {
      style.flex = props.flex === true ? 1 : props.flex;
    }
    delete props.flex;

    if (props.flexW) {
      style.flexWrap = props.flexW;
    }
    delete props.flexW;

    if (props.flexS) {
      style.flexShrink = props.flexS;
    }
    delete props.flexS;

    if (props.flexG) {
      style.flexGrow = props.flexG;
    }
    delete props.flexG;

    if (props.position) {
      style.position = props.position;
    }
    delete props.position;

    return style;
  };

  static destructStyles = <T extends object>(props: T) => {
    const layout = this.destructLayout(props);
    const { spacing, remaining } = this.destructSpacing(props);

    return { layout, spacing, remaining };
  };
}

export default styleHelper;
