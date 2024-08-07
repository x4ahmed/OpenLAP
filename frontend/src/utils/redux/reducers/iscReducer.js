export const SET_DEFAULT = "Initialized";
export const EDIT_ISC_DATA = "Edit an indicator";
export const INDICATOR_NAME = "Name of indicator set";
export const CHART_SELECTED = "A chart is selected";
export const TYPE_SELECTED = "Filter type(s) selected";
export const DATASET_ROW_DATA = "CreateData row data set";
export const DATASET_COLUMN_DEF = "CreateData column data set";
export const CHART_OPTIONS = "Chart options set";
export const CHART_SERIES = "Chart series set";
export const MENU_1 = "Menu 1 set";
export const MENU_2 = "Menu 2 set";
export const OPEN_VIS_ACCORDION = "Open/close visualization tab";
export const OPEN_EDIT_PANEL = "Open/close edit panel";
export const SAVE_ISC_INDICATOR = "Save ISC indicator";
export const GET_ALL_SAVED_ISC_INDICATORS_REQUEST = "Request all saved ISC indicators";
export const GET_ALL_SAVED_ISC_INDICATORS_RESPONSE = "Response all saved ISC indicators";
export const EDIT_EXISTING_ISC_INDICATOR = "Edit existing ISC indicator";
export const DELETE_ISC_INDICATOR = "Delete ISC indicator";
export const IMPORT_BULK_ISC_INDICATORS = "Import bulk ISC indicators";

export const setIndicatorName = (indicatorName) => ({
  type: INDICATOR_NAME,
  indicatorName,
});
export const setChart = (chart) => ({
  type: CHART_SELECTED,
  chart,
});
export const setMenu1 = (inputValue) => ({
  type: MENU_1,
  inputValue,
});
export const setMenu2 = (inputValue) => ({
  type: MENU_2,
  inputValue,
});
export const setChartOptions = (options) => ({
  type: CHART_OPTIONS,
  options,
});
export const setChartSeries = (series) => ({
  type: CHART_SERIES,
  series,
});
export const setFilterTypes = (filterTypes) => ({
  type: TYPE_SELECTED,
  filterTypes,
});
export const setDatasetRowData = (rowData) => ({
  type: DATASET_ROW_DATA,
  rowData,
});
export const setDatasetColumnDef = (columnDefs) => ({
  type: DATASET_COLUMN_DEF,
  columnDefs,
});
export const setDefault = () => ({
  type: SET_DEFAULT,
});
export const editISC = (iscData) => ({
  type: EDIT_ISC_DATA,
  iscData,
});
export const openVisualizationAccordion = () => ({
  type: OPEN_VIS_ACCORDION,
});

export const openEditPanel = () => ({
  type: OPEN_EDIT_PANEL,
});

export const saveISCIndicator = (iscData) => ({
  type: SAVE_ISC_INDICATOR,
  iscData,
});

export const getAllSavedISCIndicatorsRequest = () => ({
  type: GET_ALL_SAVED_ISC_INDICATORS_REQUEST,
});

export const getAllSavedISCIndicatorsResponse = (listofIscIndicators) => ({
  type: GET_ALL_SAVED_ISC_INDICATORS_RESPONSE,
  listofIscIndicators
});

export const editExistingISCIndicator = (iscIndicator) => ({
  type: EDIT_EXISTING_ISC_INDICATOR,
  iscIndicator,
});

export const deleteISCIndicator = (listOfIscIndicators) => ({
  type: DELETE_ISC_INDICATOR,
  listOfIscIndicators,
});

export const importBulkISCIndicators = (iscIndicators) => ({
  type: IMPORT_BULK_ISC_INDICATORS,
  iscIndicators,
});

const initialState = {
  indicatorName: "",
  visualization: {
    expanded: false,
    menu1: undefined,
    menu2: undefined,
    options: {},
    series: [],
    chart: {name: ""},
    filterTypes: [],
    editPanel: false,
  },
  data: {
    rowData: [],
    columnDefs: [],
  },
  listofIscIndicators: [],
};

// data: {
//   rowData: [{"Exercises": "Exercise 1", "Class Average Points": 91, "My Points": 100,}],
//   columnDefs: [
//     {headerName: "categorical", children: [{headerName: "Exercises", field: "Exercises"}]},
//     {headerName: "numerical", children: [{headerName: "Class Average Points", field: "Class Average Points"}]},
//     {headerName: "numerical", children: [{headerName: "My Points", field: "My Points"}]},
//   ]
// }

export default function iscReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT:
      return initialState;

    case OPEN_VIS_ACCORDION:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          expanded: !state.visualization.expanded,
        },
      };
    case EDIT_ISC_DATA:
      return {
        ...state,
        indicatorName: action.iscData.indicatorName,
        visualization: action.iscData.visualization,
        data: action.iscData.data,
      };
    case CHART_SERIES:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          series: action.series,
        },
      };
    case CHART_OPTIONS:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          options: action.options,
        },
      };
    case MENU_1:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          menu1: action.inputValue,
        },
      };
    case MENU_2:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          menu2: action.inputValue,
        },
      };
    case INDICATOR_NAME:
      return {
        ...state,
        indicatorName: action.indicatorName,
      };
    case CHART_SELECTED:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          chart: action.chart,
          menu1: undefined,
          menu2: undefined,
          options: {},
          series: [],
        },
      };
    case TYPE_SELECTED:
      return {
        ...state,
        visualization: {
          ...state.visualization,
          filterTypes: action.filterTypes,
        },
      };
    case DATASET_ROW_DATA:
      return {
        ...state,
        data: {...state.data, rowData: action.rowData},
      };
    case DATASET_COLUMN_DEF:
      return {
        ...state,
        data: {...state.data, columnDefs: action.columnDefs},
      };
    case OPEN_EDIT_PANEL:
      let setOpen = !state.visualization.editPanel;
      return {
        ...state,
        visualization: {
          ...state.visualization,
          editPanel: setOpen,
        },
      };
      case SAVE_ISC_INDICATOR:
        return {
          ...state,
          listofIscIndicators: [...state.listofIscIndicators, action.iscData],
        };
        case GET_ALL_SAVED_ISC_INDICATORS_RESPONSE:
          return {
            ...state,
            listofIscIndicators: [],
            listofIscIndicators: action.listofIscIndicators,
          };
    default:
      return state;
  }
}
