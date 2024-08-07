import { useState, useEffect } from "react";
import {
  AppBar,
  Breadcrumbs,
  Toolbar,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Box,
  Paper,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Link,
  IconButton,
  Tooltip,
  Typography,
  TextField,
} from "@mui/material";
import {
  Add as AddIcon,
  Upload as UploadIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Close as CloseIcon,
  GetApp as GetAppIcon,
  Visibility as VisibilityIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
  InsertDriveFile as InsertDriveFileIcon,
} from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import Chart from "react-apexcharts";
import { setSidebarMenu } from "../../../utils/redux/reducers/reducer";
import { getLastUpdateDate } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import defaultISCData from "../../../utils/data/defaultISCData";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { getAllSavedISCIndicatorsRequest, deleteISCIndicator, importBulkISCIndicators } from "../../../utils/redux/reducers/iscReducer.js";

const ISCDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [onProgressDialog, setOnProgressDialog] = useState(false);
  const [openUploadJSONModal, setOpenUploadJSONModal] = useState(false);
  const [onProgressFromEditDialog, setOnProgressFromEditDialog] = useState({
    status: false,
    indicatorData: null,
  });
  const [toBeDeleted, setToBeDeleted] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const defaultPreviewIndicator = {
    indicatorGoal: "",
    indicatorQuestion: "",
    indicatorName: "",
    chartName: "",
    dataState: {
      rowData: [],
      columnData: [],
      status: false,
    },
    options: {},
    series: [],
    type: "",
    status: false,
  };
  const [previewIndicator, setPreviewIndicator] = useState(
    defaultPreviewIndicator
  );

  const [file, setFile] = useState({ name: "" });
  const [anchorEl, setAnchorEl] = useState(null);
  const [tempIndicatorSelected, setTempIndicatorSelected] = useState({});
  const [batchIndicatorSelected, setBatchIndicatorSelected] = useState([]);
  const [deleteSelected, setDeleteSelected] = useState(false);
  const open = Boolean(anchorEl);

  const listofIscIndicators = useSelector(state => state.iscReducer.listofIscIndicators);

  const [parsedISCData, setParsedISCData] = useState([]);

  // const [anchorEl2, setAnchorEl2] = useState(null);
  // const open2 = Boolean(anchorEl2);

  const handleClick = (event, indicator) => {
    setAnchorEl(event.currentTarget);
    setTempIndicatorSelected(indicator);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setTempIndicatorSelected({});
  };
  // const handleClick2 = (event, indicator) => {
  //   setAnchorEl2(event.currentTarget);
  // };
  // const handleClose2 = () => {
  //   setAnchorEl2(null);
  // };

  useEffect(() => {
    dispatch(getAllSavedISCIndicatorsRequest());
    // if (!Boolean(ISCDashboard)) {
    //   defaultISCData.sort(
    //     (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
    //   );
    //   setParsedISCData(defaultISCData);
    //   // localStorage.setItem(
    //   //   "openlap-isc-dashboard",
    //   //   JSON.stringify(defaultISCData)
    //   // );
    // }
  }, [dispatch]);

  const handleCreateIndicator = (forceCreate = false) => {
    const iscData = JSON.parse(sessionStorage.getItem("openlap-isc-data"));
    if (iscData && !onProgressDialog && !forceCreate) {
      let indicatorName = iscData.indicatorName;
      let indicatorQuestion = iscData.indicatorQuestion;
      let indicatorGoalText = iscData.indicatorGoal?.noun;
      let chartSelected = iscData.chartType?.code;
      let dataStateRowData = iscData.indicatorData?.rowData;
      let condition =
        (indicatorName && indicatorName !== "") ||
        (indicatorQuestion && indicatorQuestion !== "") ||
        (indicatorGoalText && indicatorGoalText !== "") ||
        (chartSelected && chartSelected !== "") ||
        (dataStateRowData && dataStateRowData.length > 0);
      if (condition) {
        setOnProgressDialog(true);
        return;
      }
    }

    let ISCSettings = JSON.parse(sessionStorage.getItem("openlap-settings"));
    delete ISCSettings.userCreatesIndicator;
    delete ISCSettings.userSelectsDataset;
    delete ISCSettings.userSelectsVisualization;
    delete ISCSettings.userSelectsOnlyVisualization;
    delete ISCSettings.userFinalizeSelection;
    sessionStorage.setItem("openlap-settings", JSON.stringify(ISCSettings));
    sessionStorage.removeItem("chart-options");
    sessionStorage.removeItem("chart-series");
    sessionStorage.removeItem("openlap-isc-data");
    dispatch(setSidebarMenu("/isc/creator"));
    navigate("/isc/creator");
  };

  const handleEditIndicator = (params, forceEdit = false) => {
    // let tempParams = params.row;
    let tempParams = params;
    const iscData = JSON.parse(sessionStorage.getItem("openlap-isc-data"));
    if (iscData && !onProgressFromEditDialog.status && !forceEdit) {
      let indicatorName = iscData.indicatorName;
      let indicatorQuestion = iscData.indicatorQuestion;
      let indicatorGoalText = iscData.indicatorGoal?.noun;
      let chartSelected = iscData.chartType?.code;
      let dataStateRowData = iscData.indicatorData?.rowData;
      let condition =
        indicatorName !== "" ||
        indicatorQuestion !== "" ||
        indicatorGoalText !== "" ||
        chartSelected !== "" ||
        dataStateRowData.length > 0;
      if (condition) {
        setOnProgressFromEditDialog({ indicatorData: params, status: true });
        return;
      }
    }
    sessionStorage.setItem("openlap-isc-data", JSON.stringify(tempParams));
    sessionStorage.setItem(
      "chart-series",
      JSON.stringify(tempParams.chartSeries)
    );
    sessionStorage.setItem(
      "chart-options",
      JSON.stringify(tempParams.chartOptions)
    );
    let ISCSettings = JSON.parse(sessionStorage.getItem("openlap-settings"));
    let tempSettings = {
      ...ISCSettings,
      userCreatesIndicator: true,
      userSelectsDataset: false,
      userSelectsVisualization: false,
      userSelectsOnlyVisualization: false,
      userFinalizeSelection: true,
    };
    sessionStorage.setItem("openlap-settings", JSON.stringify(tempSettings));
    dispatch(setSidebarMenu("/isc/creator"));
    navigate("/isc/creator");
  };

  const handlePreviewIndicator = (params) => {
    // let tempParams = params.row;
    let tempParams = params;
    const dataState = parseIndicatorData(
      tempParams.chartOptions,
      tempParams.indicatorData
    );
    let darkMode = JSON.parse(sessionStorage.getItem("openlap-settings"))
      .darkMode
      ? "#ffffff"
      : "#000000";
    let tempChartOptions = {
      ...tempParams.chartOptions,
      chart: {
        ...tempParams.chartOptions.chart,
        foreColor: darkMode,
      },
    };
    setPreviewIndicator((prevState) => {
      return {
        ...prevState,
        indicatorGoal: tempParams.indicatorGoal.noun,
        indicatorQuestion: tempParams.indicatorQuestion,
        indicatorName: tempParams.indicatorName,
        chartName: `${tempParams.chartName}`,
        dataState: dataState,
        options: tempChartOptions,
        series: tempParams.chartSeries,
        type: tempParams.chartOptions.chart.type,
        status: true,
      };
    });
  };

  const parseIndicatorData = (options, indicatorData) => {
    const keysToKeep = ["id", options.name, options.seriesName];

    const filteredRowData = indicatorData.rowData.map((row) => {
      return Object.keys(row)
        .filter((key) => keysToKeep.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: row[key],
          };
        }, {});
    });

    const filteredColumnData = indicatorData.columnData.filter((column) =>
      keysToKeep.includes(column.field)
    );

    return {
      rowData: filteredRowData,
      columnData: filteredColumnData,
      status: indicatorData.status,
    };
  };

  const deleteISC = () => {
    setDeleteDialog((prevState) => !prevState);
    const filteredISC = deleteSelected
      ? parsedISCData.filter((parsedISC) => !selected.includes(parsedISC.id))
      : parsedISCData.filter((parsedISC) => parsedISC.id !== toBeDeleted.id);

    filteredISC.sort(
      (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
    );
    setParsedISCData(filteredISC);
    setSelected([]);
    handleClose();
    let listofIscIndicators = selected.map((id) => {
      return id;
    });

    if (listofIscIndicators.length === 0)
      listofIscIndicators.push(toBeDeleted.id);

    dispatch(deleteISCIndicator(listofIscIndicators));
  };

  const handleDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDragEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleUploadFile = () => {
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      try {
        const newJson = JSON.parse(target.result);
        const existingData = listofIscIndicators;
        const mergedData = [...existingData, ...newJson];
        mergedData.sort(
          (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
        );
        setParsedISCData(mergedData);
        // localStorage.setItem(
        //   "openlap-isc-dashboard",
        //   JSON.stringify(mergedData)
        // );
        setOpenUploadJSONModal(false);
        dispatch(importBulkISCIndicators(newJson));
      } catch {
        console.log("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleDownloadFile = (downloadAll = false) => {
    const parsedData = listofIscIndicators;
    const filteredISC = downloadAll
      ? parsedData
      : parsedData.filter((parsedISC) => selected.includes(parsedISC.id));
    const fileData = JSON.stringify(filteredISC);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `file-${uuidv4()}.json`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSeacrhIndicator = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.indicatorName.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = handleSeacrhIndicator(searchQuery, parsedISCData);

  function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Box display="flex" alignItems="center">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all Indicators",
                }}
              />
              <Typography variant="overline" sx={{ fontWeight: "bold", ml: 1 }}>
                Indicators
              </Typography>
            </Box>
          </TableCell>
          <TableCell align="right" padding="none">
            <Typography variant="overline" sx={{ fontWeight: "bold" }}>
              Charts
            </Typography>
          </TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item sm>
          <Box display="flex" alignItems="center">
            <Tooltip
              arrow
              title={
                <Typography variant="body2" sx={{ p: 1 }}>
                  Create a new indicator
                </Typography>
              }
            >
              <Button
                disableElevation
                color="primary"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleCreateIndicator(false)}
              >
                New
              </Button>
            </Tooltip>
            <Grid item>
              {numSelected > 0 ? (
                <>
                  <Tooltip title="Export Indicator">
                    <IconButton onClick={() => handleDownloadFile(false)}>
                      <GetAppIcon fontSize="small" color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        setDeleteDialog(true);
                        setDeleteSelected(true);
                      }}
                    >
                      <DeleteIcon sx={{ color: red[500] }} />
                    </IconButton>
                  </Tooltip>
                </>
              ) : null}
            </Grid>
            {numSelected > 0 && (
              <Typography
                sx={{ ml: 2 }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {numSelected} selected
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs>
          {/* // TODO: Add the search and filter options */}
          <Grid container alignItems="center">
            <Grid item xs sx={{ pr: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search for indicators..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                onFocus={() => setIsSearchFocused(true)}
                autoFocus={isSearchFocused}
                onBlur={() => setIsSearchFocused(false)}
              />
            </Grid>
            <Grid item>
              <IconButton color="primary" disabled>
                <FilterListIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleClick} color="primary">
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",

                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => setOpenUploadJSONModal(true)}>
                  <ListItemIcon>
                    <UploadIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText>Import Indicators</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleDownloadFile(true)}>
                  <ListItemIcon>
                    <GetAppIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText>Export All Indicators</ListItemText>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const [selected, setSelected] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setParsedISCData(listofIscIndicators);
    setRows(listofIscIndicators);
  }, [listofIscIndicators]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      const newBatchIndicatorSelected = rows.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
      setSelected(newSelected);
      setBatchIndicatorSelected(newBatchIndicatorSelected);
      return;
    }
    setSelected([]);
    setBatchIndicatorSelected([]);
  };

  const handleRowClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    let newBatchIndicatorSelected = { ...batchIndicatorSelected };

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      newBatchIndicatorSelected[id] = rows.find((row) => row.id === id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      delete newBatchIndicatorSelected[id];
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      delete newBatchIndicatorSelected[id];
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
      delete newBatchIndicatorSelected[id];
    }

    setSelected(newSelected);
    setBatchIndicatorSelected(newBatchIndicatorSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div>
            <AppBar position="static" elevation={0}>
              <Toolbar
                sx={{
                  minHeight: "48px!important",
                  backgroundColor: "#ffffff",
                  borderBottom: "1px solid #C9C9C9",
                }}
              >
                <Container disableGutters maxWidth="false">
                  <Box
                    sx={{
                      maxHeight: "64px",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    {/* Centered Page Title*/}
                    <div
                      style={{
                        flexGrow: 1,
                        textAlign: "center",
                        fontSize: "1rem",
                        color: "#000000",
                      }}
                    >
                      <div role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                          <Typography color="text.primary">
                            ISC Dashboard
                          </Typography>
                        </Breadcrumbs>
                      </div>
                    </div>
                  </Box>
                </Container>
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </div>
      <Grid
        container
        spacing={2}
        style={{
          maxWidth: "990px",
          display: "flex",
          flexDirection: "column",
          margin: "24px auto",
          padding: "0 32px",
        }}
      >
        <Grid item xs={12}>
          <EnhancedTableToolbar numSelected={selected.length} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              border: "1px solid #c4c4c4",
              borderRadius: 1,
            }}
          >
            <Table stickyHeader size="small">
              <EnhancedTableHead
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
              />
              <TableBody>
                {dataFiltered
                  .sort(
                    (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
                  )
                  .map((row, index) => {
                    const isItemSelected = isSelected(row?.id);
                    return (
                      <TableRow
                        hover
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" sx={{ py: 1.5 }}>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": `enhanced-table-checkbox-${index}`,
                              }}
                              selected={isItemSelected}
                              aria-checked={isItemSelected}
                              onClick={(event) => handleRowClick(event, row?.id)}
                            />
                            <Box display="flex" flexDirection="column">
                              <Typography variant="body1" gutterBottom>
                                {row?.indicatorName}
                              </Typography>
                              <Typography variant="body2">
                                <i>
                                  Last updated:{" "}
                                  {getLastUpdateDate(row?.lastUpdated)}
                                </i>
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="right" padding="none">
                          <Typography variant="body2" gutterBottom>
                            {row?.chartName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Grid
                            container
                            justifyContent="flex-end"
                            spacing={1}
                            sx={{ width: "100px" }}
                          >
                            <Grid item>
                              <Tooltip
                                arrow
                                title={
                                  <Typography variant="body2" sx={{ p: 1 }}>
                                    Preview
                                  </Typography>
                                }
                              >
                                <IconButton
                                  color="primary"
                                  onClick={() => handlePreviewIndicator(row)}
                                >
                                  <VisibilityIcon />
                                </IconButton>
                              </Tooltip>
                            </Grid>
                            <Grid item>
                              <Tooltip
                                arrow
                                title={
                                  <Typography variant="body2" sx={{ p: 1 }}>
                                    More options
                                  </Typography>
                                }
                              >
                                <IconButton
                                  onClick={(event) => handleClick(event, row)}
                                >
                                  <MoreVertIcon color="primary" />
                                </IconButton>
                              </Tooltip>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => handleEditIndicator(tempIndicatorSelected)}
            >
              <ListItemIcon>
                <EditIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText>Edit indicator</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                setDeleteDialog(true);
                setDeleteSelected(false);
                setToBeDeleted(tempIndicatorSelected);
              }}
            >
              <ListItemIcon>
                <DeleteIcon fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText>Delete indicator</ListItemText>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Dialog open={openUploadJSONModal} fullWidth maxWidth="sm">
        <DialogTitle>
          <Grid container justifyContent="space-between" alignItems="center">
            Import Indicators
            <IconButton
              onClick={() => setOpenUploadJSONModal((prevState) => !prevState)}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            You can import your indicators in only <b>JSON</b> format.
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            <b>Note:</b> You do not need to import any data. Data you do import
            is not permanently stored. We recommend against uploading sensitive
            data that is confidential or contains identifying information about
            other people or parties.
          </Typography>
          <Box sx={{ pt: 2 }}>
            {file.name ? (
              <Grid container sx={{ height: 50 }} alignItems="center">
                <Grid item xs>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Grid container alignItems="center">
                        <InsertDriveFileIcon sx={{ color: "primary.main" }} />
                        <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                          {file.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center">
                        <Box
                          sx={{
                            borderRadius: 1,
                            px: 1,
                            mx: 1.5,
                            py: 0.5,
                            backgroundColor: "openlapTheme.light",
                          }}
                        >
                          <Typography variant="body2">
                            {file.size} KB
                          </Typography>
                        </Box>
                        <Tooltip
                          title="Remove file and choose another file"
                          arrow
                        >
                          <IconButton
                            onClick={() => setFile({ name: "" })}
                            size="small"
                            sx={{ color: "red" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: "2px dotted #C4C4C4",
                  height: 150,
                  borderRadius: 2,
                  mb: 1,
                }}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDrop={handleDrop}
              >
                <Link component="label" sx={{ cursor: "pointer" }}>
                  Choose a file or drag it here.
                  <input
                    hidden
                    multiple
                    onChange={(event) => setFile(event.target.files[0])}
                    type="file"
                    accept=".json"
                  />
                </Link>
              </Grid>
            )}
          </Box>
          <Grid container justifyContent="center" sx={{ pt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<GetAppIcon />}
              disabled={!Boolean(file.name)}
              onClick={handleUploadFile}
            >
              Import data
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Edit an indicator but something is in progress */}
      <Dialog open={onProgressFromEditDialog.status} fullWidth maxWidth="sm">
        <DialogTitle>Continue Editing or Edit this Indicator</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            There is an indicator in progress. You have the following options:
          </Typography>
          <Typography gutterBottom>
            <li>You continue editing the other indicator</li>
            <li>
              If you edit this indicator, the in-progress indicator will be
              discarded
            </li>
          </Typography>
          <Typography gutterBottom>What would you like to do?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => {
              setOnProgressFromEditDialog({
                status: false,
                indicatorData: null,
              });
              navigate("/isc/creator");
              dispatch(setSidebarMenu("/isc/creator"));
            }}
            fullWidth
          >
            Continue editing
          </Button>
          <Button
            onClick={() => {
              let indicatorDataParams = onProgressFromEditDialog.indicatorData;
              setOnProgressFromEditDialog({
                status: false,
                indicatorData: null,
              });
              handleEditIndicator(indicatorDataParams, true);
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Edit this indicator
          </Button>
        </DialogActions>
      </Dialog>

      {/* Create new but some things are in progress */}
      <Dialog open={onProgressDialog} fullWidth maxWidth="sm">
        <DialogTitle>Continue Editing or Create a New Indicator</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            There is an indicator in progress. You have the following options:
          </Typography>
          <Typography gutterBottom>
            <li>You continue editing indicator</li>
            <li>
              If you create a new indicator, the in-progress indicator will be
              discarded
            </li>
          </Typography>
          <Typography gutterBottom>What would you like to do?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => {
              setOnProgressDialog(false);
              navigate("/isc/creator");
              dispatch(setSidebarMenu("/isc/creator"));
            }}
            fullWidth
          >
            Continue editing
          </Button>
          <Button
            onClick={() => {
              setOnProgressDialog(false);
              handleCreateIndicator(true);
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Create New indicator
          </Button>
        </DialogActions>
      </Dialog>

      {/* Preview indicator */}
      <Dialog open={previewIndicator.status} fullWidth maxWidth="md">
        <DialogTitle>Indicator Specification Card</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="overline">Goal</Typography>
                  <Typography gutterBottom>
                    {previewIndicator.indicatorGoal}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="overline">Question</Typography>
                  <Typography gutterBottom>
                    {previewIndicator.indicatorQuestion}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="overline">Indicator name</Typography>
                  <Typography gutterBottom>
                    {previewIndicator.indicatorName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="overline">Data</Typography>
                      <Typography gutterBottom>
                        {previewIndicator.options.xaxis?.name}
                        {previewIndicator.type === "pie" ||
                        previewIndicator.type === "polarArea"
                          ? ` & ${previewIndicator.options.xaxis.seriesName}`
                          : previewIndicator.series.map(
                              (series, index) =>
                                `${
                                  previewIndicator.series.length === 1
                                    ? " & "
                                    : index < 1
                                    ? ", "
                                    : previewIndicator.series.length ===
                                      index + 1
                                    ? " & "
                                    : ", "
                                }${series.name}`
                            )}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="overline">Idiom</Typography>
                      <Typography gutterBottom>
                        {previewIndicator.chartName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <DataGrid
                sx={{ height: "250px" }}
                rows={previewIndicator.dataState.rowData}
                columns={previewIndicator.dataState.columnData}
              />
            </Grid> */}
            <Grid item xs={12} sx={{ height: "55vh" }}>
              <Chart
                options={previewIndicator.options}
                series={previewIndicator.series}
                type={previewIndicator.type}
                height="95%"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setPreviewIndicator(defaultPreviewIndicator)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete an indicator from dashboard */}
      <Dialog open={deleteDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          Are you sure you want to delete this indicator?
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Deleting this indicator will result in the loss of all associated
            data, selections, and configurations. Please consider the following
            before proceeding:
          </Typography>
          <Typography gutterBottom>
            <li>
              Any data linked to this indicator will be permanently removed
            </li>
            <li>
              There is no way to recover this indicator once it is deleted
            </li>
          </Typography>
          <Typography gutterBottom>
            If you are certain about deleting this indicator, please click the
            "Delete" button below. Otherwise, click "Cancel" to retain the
            indicator and its associated data and selections.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => setDeleteDialog(false)}
            fullWidth
          >
            Cancel
          </Button>
          <Button
            onClick={deleteISC}
            variant="contained"
            color="error"
            fullWidth
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ISCDashboard;
