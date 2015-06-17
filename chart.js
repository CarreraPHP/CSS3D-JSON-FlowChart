var chart = [{
    name: 'User is getting slow response',
    description: '',
    options: [{
        name: 'Always',
        impact: -1,
        charts: [{
            name: 'Use APM Introscope to monitor the execution time for queries, heap size, etc',
            description: '',
            options: [{
                name: 'Check',
                impact: -1,
                charts: [{
                    name: 'Check whether the utilization of the server is high',
                    description: '',
                    options: [{
                        name: 'Always',
                        impact: -1,
                        charts: [{
                            name: 'Check whether the Query is taking more time',
                            description: '',
                            options: [{
                                name: 'Always',
                                impact: -1,
                                charts: [{
                                    name: 'Try with different login id\'s and see if for all users getting slow response',
                                    description: '',
                                    options: [{
                                        name: 'Finish',
                                        charts: []
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                name: 'Always',
                charts: [{
                    name: 'Nothing Here',
                    description: '',
                    options: [{
                        name: 'finish',
                        charts: []
                    }]
                }]
            }]
        }]
    }]
}];