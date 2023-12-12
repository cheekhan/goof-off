# 示例：

### slot

| 名称    | 说明                                                                     |
| ------- | ------------------------------------------------------------------------ |
| default | 默认部分，需要传入 element 的 el-table-column                            |
| header  | 表单查询， 需要传入 element 的 el-form-item，为了样式美观可以传入 el-row |
| btns    | 操作按钮， 需要传入 element 的 el-button                                 |
| footer  | 分页，默认显示                                                           |

### props

| 字段名 | 类型   | 默认值 | 说明                             |
| ------ | ------ | ------ | -------------------------------- |
| table  | Array  | []     | 给 element 表格传入的 data       |
| form   | object | {}     | 给 element 表单传入的 data       |
| total  | number | {}     | 给 element 分页总条数传入的 data |

### emit

| 字段名 | 类型     | 默认值 | 说明                                   |
| ------ | -------- | ------ | -------------------------------------- |
| change | function |        | 用于组件更改分页时，通知父组件更新数据 |
