exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#fff',
    cursorColor: '#9ef2e2',
    backgroundColor: '#121212',
    borderColor: 'transparent',
    css: `
      ${config.css || ''}
      .hyper_main {
          background: transparent !important;
      }
        .terms_terms {
          background: transparent !important;
          border: 1px solid #9ef2e2;
          border-radius: 5px;
          padding: 0px;
          margin-right: 1px;
          margin-bottom: 1px;
          margin-left: 1px;
          margin-top: 0px;
          padding-top: 30px;

        }
        .terms_terms:before {
            content: '';
            pointer-events: none;
            border: 1px solid #31564f;
            border-radius: 3px;
            position: absolute;
            top: 3px; right: 3px; bottom: 3px; left: 3px;

        }
        .header_header {


            height: 32px;

            border-bottom: 1px solid #31564f;
            left: 6px;
            right: 6px;
        }

        .tabs_nav {


        }

        .tabs_list {
            margin-top: 4px;
            margin-right: 3px;
            margin-left: 66px;
            height: 28px;
        }
        .tab_tab {

            line-height: 28px;
            margin: 0; padding: 0 0 0 0px;
             margin-right: 3px;
            font-weight: bold;
            color: #31564f;

                  border-radius: 2px;
                  border-left: 1px solid #31564f !important;
            font-size: 10px;
            text-transform: uppercase;
            font-family: 'Bitstream Vera Sans Mono';
                  // border-right: 1px solid #31564f !important;
                  // border-radius: 3px;



        }
        .tab_active {
            color: #9ef2e2;

        }
        .tab_active:hover {

            color: #fff;
        }
        .tab_tab:after {



        }
        .tab_tab:hover {


        }
        .tab_tab:last-child {
            margin-right: 0px;

        }
        .tab_tab:first-child {
            border: 0 !important;

        }
    `
  });
}
