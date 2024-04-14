import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

function BuildingEnvelopeDetails() {

const mockedData = {
  floors: [
    {
      part: 'P1',
      elements: [
        {
          type: 'Wall',
          dimensions: { length: 10, outerHeight: 2.5, soilHeight: 0 },
          area: { grossWall: 25, soilWall: 0, netWall: 20 },
          windows: [
            { length: 1.2, height: 1.5, type: 'Window 1', area: 1.8 },
            { length: 1.2, height: 1.5, type: 'Window 2', area: 1.8 },
            { length: 1.2, height: 1.5, type: 'Window 3', area: 1.8 }
          ],
          doors: [
            { width: 0.9, height: 2, type: 'Door 1', area: 1.8 },
            { width: 0.9, height: 2, type: 'Door 2', area: 1.8 }
          ]
        }
      ]},
    {
      part: 'P2',
      elements: [
        {
          type: 'Wall',
          dimensions: { length: 12, outerHeight: 2.7, soilHeight: 0 },
          area: { grossWall: 32.4, soilWall: 0, netWall: 27 },
          windows: [
            { length: 1.5, height: 1.5, type: 'Window 1', area: 2.25 },
            // Assume P2 has two windows of the same type for simplicity
          ],
          doors: [
            { width: 1.0, height: 2, type: 'Door 1', area: 2 },
            // Assume P2 has one door for simplicity
          ]
        },
        // Assume P2 has one element for simplicity
      ]
    },
    // Assume there are only two floors for simplicity
  ],
  // Additional sections
  roomDescriptions: [
    {
      name: 'Etajul 1',
      grossAreaPerFloor: 250,
      numberOfFloors: 2,
      grossHeatedArea: 500,
      netHeightPerFloor: 2.5,
      buildingPerimeter: 60,
      wallThickness: 0.3,
      totalWallArea: 72,
      netHeatedArea: 490,
      netHeatedVolume: 1225
    },
    // Additional room description sections can follow the same structure
  ],
  windowsDoorsPreRenovation: [
    {
      element: 'Window',
      description: 'Window veche de lemn',
      type: 'Simple glazing',
      UValue: 4.8
    },
    {
      element: 'Ușă',
      description: 'Ușă principală veche',
      type: 'Wooden door',
      UValue: 2.9
    }
  ],
  windowsDoorsPostRenovation: [
    {
      element: 'Window',
      description: 'Window nouă PVC',
      type: 'Double glazing',
      UValue: 1.3
    },
    {
      element: 'Ușă',
      description: 'Ușă principală izolată',
      type: 'Insulated steel door',
      UValue: 1.1
    }
  ],
  // More sections can be added following the pattern above
};

const renderTableRows = (data) => {
    return data.map((item, index) => (
      <TableRow key={index}>
        {Object.values(item).map((value, idx) => (
          <TableCell key={idx}>{value}</TableCell>
        ))}
      </TableRow>
    ));
  };
const exportToExcel = () => {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Function to format data according to xlsx utils requirements
  const formatDataForExcel = (data) => {
    return data.map(item => ({
      ...item,
      dimensions: `Length: ${item.dimensions.length}, Outer Height: ${item.dimensions.outerHeight}, Soil Height: ${item.dimensions.soilHeight}`,
      area: `Gross Wall: ${item.area.grossWall}, Soil Wall: ${item.area.soilWall}, Net Wall: ${item.area.netWall}`,
      windows: item.windows.map(w => `Type: ${w.type}, Dimensions: ${w.length}m x ${w.height}m, Area: ${w.area}`).join("; "),
      doors: item.doors.map(d => `Type: ${d.type}, Dimensions: ${d.width}m x ${d.height}m, Area: ${d.area}`).join("; "),
    }));
  };

  // Add floor data to the workbook
  mockedData.floors.forEach((floor, index) => {
    // Format the elements array for Excel
    const formattedElements = formatDataForExcel(floor.elements);
    const floorSheet = XLSX.utils.json_to_sheet(formattedElements, {
      header: ["type", "dimensions", "area", "windows", "doors"],
      skipHeader: true
    });
    XLSX.utils.book_append_sheet(workbook, floorSheet, `Floor ${index + 1}`);
  });

  // Add room descriptions to the workbook
  const roomDescSheet = XLSX.utils.json_to_sheet(mockedData.roomDescriptions);
  XLSX.utils.book_append_sheet(workbook, roomDescSheet, 'Room Descriptions');

  // Add windows and doors pre-renovation to the workbook
  const windowsDoorsPreSheet = XLSX.utils.json_to_sheet(mockedData.windowsDoorsPreRenovation);
  XLSX.utils.book_append_sheet(workbook, windowsDoorsPreSheet, 'WindowsDoors Pre-Renovation');

  // Add windows and doors post-renovation to the workbook
  const windowsDoorsPostSheet = XLSX.utils.json_to_sheet(mockedData.windowsDoorsPostRenovation);
  XLSX.utils.book_append_sheet(workbook, windowsDoorsPostSheet, 'WindowsDoors Post-Renovation');

  // Trigger the download of the workbook
  XLSX.writeFile(workbook, 'building_data.xlsx');
};


return (
        <div style={{width: '100%', marginTop: '100px'}}>
            <Typography variant="h4" gutterBottom>
                Building Details
            </Typography>
            
            {/* Button to export data to Excel */}
            <Button variant="contained" onClick={exportToExcel} sx={{ mb: 2 }}>
                Export to Excel
            </Button>
            
            <div style={{width: '90%'}}>
            {mockedData.floors.map((floor, index) => (
        <TableContainer component={Paper} key={index} sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom component="div">
            Floor {index + 1}
          </Typography>
          <Table aria-label={`Floor ${index + 1} details`}>
            <TableHead>
              <TableRow>
                <TableCell>Part</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Dimensions (LxH)</TableCell>
                <TableCell>Area (m²)</TableCell>
                <TableCell>Windows (Count)</TableCell>
                <TableCell>Doors (Count)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {floor.elements.map((element, elemIndex) => (
                <TableRow key={elemIndex}>
                  <TableCell>{floor.part}</TableCell>
                  <TableCell>{element.type}</TableCell>
                  <TableCell>{`${element.dimensions.length}m x ${element.dimensions.outerHeight}m`}</TableCell>
                  <TableCell>{element.area.grossWall}</TableCell>
                  <TableCell>{element.windows.length}</TableCell>
                  <TableCell>{element.doors.length}</TableCell>
                </TableRow>
                // Additional rows for window and door details would go here
              ))}
            </TableBody>
          </Table>

          {/* Windows and Doors Details for Each Element */}
          {floor.elements.map((element, elemIndex) => (
            <>
              <Typography variant="h6" gutterBottom component="div" sx={{ mt: 2 }}>
                Element {elemIndex + 1} Windows
              </Typography>
              <Table aria-label={`Element ${elemIndex + 1} windows details`}>
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Dimensions (LxH)</TableCell>
                    <TableCell>Area (m²)</TableCell>
                    <TableCell>Material</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {element.windows.map((window, windowIndex) => (
                    <TableRow key={windowIndex}>
                      <TableCell>{window.type}</TableCell>
                      <TableCell>{`${window.length}m x ${window.height}m`}</TableCell>
                      <TableCell>{window.area}</TableCell>
                      <TableCell>{'Material Information'}</TableCell> {/* Replace with actual data */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Typography variant="h6" gutterBottom component="div" sx={{ mt: 2 }}>
                Element {elemIndex + 1} Doors
              </Typography>
              <Table aria-label={`Element ${elemIndex + 1} doors details`}>
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Dimensions (WxH)</TableCell>
                    <TableCell>Area (m²)</TableCell>
                    <TableCell>Material</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {element.doors.map((door, doorIndex) => (
                    <TableRow key={doorIndex}>
                      <TableCell>{door.type}</TableCell>
                      <TableCell>{`${door.width}m x ${door.height}m`}</TableCell>
                      <TableCell>{door.area}</TableCell>
                      <TableCell>{'Material Information'}</TableCell> {/* Replace with actual data */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ))}
        </TableContainer>
      ))}
             <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          Room Descriptions
        </Typography>
        <Table aria-label="Room Descriptions">
          <TableHead>
            <TableRow>
              {Object.keys(mockedData.roomDescriptions[0]).map((key, index) => (
                <TableCell key={index}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableRows(mockedData.roomDescriptions)}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Windows and Doors Pre-Renovation Table */}
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          Windows and Doors Pre-Renovation
        </Typography>
        <Table aria-label="Windows and Doors Pre-Renovation">
          <TableHead>
            <TableRow>
              {Object.keys(mockedData.windowsDoorsPreRenovation[0]).map((key, index) => (
                <TableCell key={index}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableRows(mockedData.windowsDoorsPreRenovation)}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Windows and Doors Post-Renovation Table */}
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          Windows and Doors Post-Renovation
        </Typography>
        <Table aria-label="Windows and Doors Post-Renovation">
          <TableHead>
            <TableRow>
              {Object.keys(mockedData.windowsDoorsPostRenovation[0]).map((key, index) => (
                <TableCell key={index}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableRows(mockedData.windowsDoorsPostRenovation)}
          </TableBody>
        </Table>
      </TableContainer></div>
        </div>
    );
}

export default BuildingEnvelopeDetails;
