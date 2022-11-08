Ext.onReady(function () {

    let cm = new Ext.grid.ColumnModel({
        defaults: {
            sortable: true,
            width: 200,
        },
        columns: [{
            id: 'Bank',
            header: 'Title',
            dataIndex: 'BankTitleRu',
        }, {
            header: 'City',
            dataIndex: 'CityTitleRu',
        }, {
            header: 'Address',
            dataIndex: 'BankAddressRu',
        }]
    });

    let AllBanksStore = new Ext.data.Store({

        autoDestroy: true,
        autoLoad: true,

        url: '../xml/banks.xml',

        reader: new Ext.data.XmlReader({
            record: 'Bank',
            fields: [
                {name: 'BankTitleRu',},
                {name: 'CityTitleRu',},
                {name: 'BankAddressRu',}
            ]
        }),
        // filters: [{
        //     property: 'CityTitleRu',
        //     value: 'Минск',
        //     anyMatch: true,
        //     caseSensitive: true
        // }]
    });

    let grid = new Ext.grid.GridPanel({
        store: AllBanksStore,
        cm: cm,
        width: 800,
        height: 300,
        renderTo: 'test',
        title: 'Bank',
        tbar: [{
            text: 'Minsk',
            handler: function () {
                AllBanksStore.filter([
                    {
                        property: 'CityTitleRu',
                        value: 'Минск',
                        anyMatch: true,
                        caseSensitive: true
                    }
                ])
            }
        },{
            text: 'Bobruisk',
            handler: function () {
                AllBanksStore.filter([
                    {
                        property: 'CityTitleRu',
                        value: 'Бобруйск',
                        anyMatch: true,
                        caseSensitive: true
                    }
                ])
            }
        }],
    });
});