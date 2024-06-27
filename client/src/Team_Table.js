const LinkColumn = ({ value }) => {
    const linkUrl = value;
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
};
const dataGridCols = [
    {
      field: 'ESINumber',
      headerName: 'ESI Number',
      width: 300
    },
    {
      field: 'IntegrationName',
      headerName: 'Integration Name',
      width: 600,
      editable: true,
    },
    {
      field: 'SINumber',
      headerName: 'SINumber',
      width: 300
    },
    {
      field: 'IntegrationPattern',
      headerName: 'Integration Pattern',
      width: 200
    },
    {
      field: 'IntegrationPlatform',
      headerName: 'Integration Platform',
      width: 300
    },
    {
      field: 'PrimarySourceSystem',
      headerName: 'Primary Source System',
      width: 300
    },
    {
      field: 'PrimaryTargetSystem',
      headerName: 'Primary TargetSystem',
      width: 300
    },
    {
      field: 'SourceProtocol',
      headerName: 'Source Protocol',
      width: 300
    },
    {
      field: 'TargetProtocol',
      headerName: 'Target Protocol',
      width: 300
    },
    {
      field: 'Region',
      headerName: 'Region',
      width: 100
    },
    {
      field: 'Division',
      headerName: 'Division',
      width: 100
    },
    {
      field: 'PRJ',
      headerName: 'Project Number',
      width: 200
    },
    {
      field: 'CHG',
      headerName: 'ChangeNumber',
      width: 200
    },
    {
      field: 'MajorProgram',
      headerName: 'Major Program',
      width: 150
    },
    {
      field: 'DocURL',
      headerName: 'URL',
      width: 300,
      renderCell: (params) => (
        <LinkColumn value={params.value} />
      ),
    },
];

export default dataGridCols;