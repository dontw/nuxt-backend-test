<template>
    <div>
        <i-input v-model="value" placeholder="Enter something..." style="width: 300px"></i-input>
        <Select v-model="model13" filterable remote :remote-method="remoteMethod1" :loading="loading1">
            <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        <i-switch v-model="switch1" @on-change="change"></i-switch>
        <i-table :loading="loadingStatus" :columns="columns1" :data="currData"></i-table>
        <Page :total="data1.length" :page-size="2" show-total show-elevator @on-change="changePage"></Page>
    </div>
</template>

<script>
import { Input, Switch, Message, Table, Modal, Page } from 'iview'

export default {
    layout: 'panel',
    components: {
        'i-input': Input,
        'i-switch': Switch,
        'i-table': Table,
        Modal,
        Page
    },
    mounted() {
        // this.$nextTick(() => {
        //     //after DOM ELM is mounted
        //     this.currData = [this.data1[0]]
        // })
    },
    data() {
        return {
            model13: '',
            loading1: false,
            options1: [],
            list: [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware'
            ],
            value: '',
            loadingStatus: false,
            switch1: false,
            currData: [],
            columns1: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'Date',
                    key: 'date'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h(
                                'Button',
                                {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                },
                                'View'
                            ),
                            h(
                                'Button',
                                {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                },
                                'Delete'
                            )
                        ])
                    }
                }
            ],

            data1: [
                {
                    id: 1,
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    id: 2,
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    id: 3,
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    id: 4,
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            data2: [
                {
                    id: 5,
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    id: 6,
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    id: 7,
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    id: 8,
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            dataLength: 8
        }
    },
    methods: {
        change(status) {
            this.loadingStatus = !this.loadingStatus
        },

        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data1[index].name}<br>Age：${
                    this.data1[index].age
                }<br>Address：${this.data1[index].address}`
            })
        },

        remove(index) {
            this.data1.splice(index, 1)
        },

        //currPageNum 为 iview @on-change 的回传值
        changePage(currPageNum) {
            this.currData = [this.data1[currPageNum - 1]]
        },

        remoteMethod1(query) {
            if (query !== '') {
                this.loading1 = true
                setTimeout(() => {
                    this.loading1 = false
                    const list = this.list.map(item => {
                        return {
                            value: item,
                            label: item
                        }
                    })
                    this.options1 = list.filter(
                        item =>
                            item.label
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                    )
                }, 200)
            } else {
                this.options1 = []
            }
        }
    }
}
</script>



