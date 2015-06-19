var chart = [{
    id: 'ch0001',
    name: 'User is getting slow response',
    description: '',
    options: [{
        name: 'Always',
        impact: -1,
        charts: 'ch0001-ch0002'
    }]
}, {
    id: 'ch0001-ch0002',
    name: 'Use APM Introscope to monitor the execution time for queries, heap size, etc',
    description: '',
    options: [{
        name: 'Check',
        impact: -1,
        charts: 'ch0001-ch0002-ch0003'
    }, {
        name: 'Always',
        charts: 'ch0001-ch0002-ch0004'
    }]
}, {
    id: 'ch0001-ch0002-ch0003',
    name: 'Check whether the utilization of the server is high',
    description: '',
    options: [{
        name: 'Always',
        impact: -1,
        charts: 'ch0001-ch0002-ch0003-ch0005'
    }]
}, {
    id: 'ch0001-ch0002-ch0004',
    name: 'Nothing Here',
    description: '',
    options: [{
        name: 'finish',
        charts: ''
    }]
}, {
    id: 'ch0001-ch0002-ch0003-ch0005',
    name: 'Check whether the Query is taking more time',
    description: '',
    options: [{
        name: 'Always',
        impact: -1,
        charts: 'ch0001-ch0002-ch0003-ch0005-ch0006'
    }]
}, {
    id: 'ch0001-ch0002-ch0003-ch0005-ch0006',  
    name: 'Try with different login id\'s and see if for all users getting slow response',
    description: '',
    options: [{
        name: 'Finish',
        charts: ''
    }]
}];