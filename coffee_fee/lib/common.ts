import { TypeLayout, TypeSpacing, TypeStyleText } from '@/constants/spacing';

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

    return spacing;
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

  static destructStylesText = (props: TypeStyleText) => {
    const { fontSize, fontWeight, color, lineHeight, textAlign } = props;

    return {
      fontSize,
      fontWeight,
      color,
      lineHeight,
      textAlign,
    };
  };

  static removeUnusedVariable = (props: TypeSpacing = {}) => {
    delete props.mr;
    delete props.mrX;
    delete props.mrY;
    delete props.mrL;
    delete props.mrR;
    delete props.mrT;
    delete props.mrB;
    delete props.pd;
    delete props.pdX;
    delete props.pdY;
    delete props.pdL;
    delete props.pdR;
    delete props.pdT;
    delete props.pdB;

    return props;
  };

  static destructStyles = <T extends object>(props: T) => {
    const layout = this.destructLayout(props);
    const textStyle = this.destructStylesText(props);
    const spacing = this.destructSpacing(props);

    const remaining = this.removeUnusedVariable(props);

    return { layout, spacing, textStyle, remaining };
  };
}

export default styleHelper;
