export const reducer = (state, { type, payload }) => {
   switch (type) {
      case "OPEN_SIDENAV": {
         return { ...state, openSidenav: payload };
      }
      case "SIDENAV_TYPE": {
         return { ...state, sidenavType: payload };
      }
      case "SIDENAV_COLOR": {
         return { ...state, sidenavColor: payload };
      }
      case "TRANSPARENT_NAVBAR": {
         return { ...state, transparentNavbar: payload };
      }
      case "FIXED_NAVBAR": {
         return { ...state, fixedNavbar: payload };
      }
      case "OPEN_CONFIGURATOR": {
         return { ...state, openConfigurator: payload };
      }
      default: {
         throw new Error(`Unhandled action type: ${type}`);
      }
   }
};
