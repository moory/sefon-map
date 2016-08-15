/**
 * 由  冯博 创建于 2016/8/11.
 * @file zh-CN
 * @description
 */
;(function () {
    sefon.resources['zh-CN'] = {
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        toolbar: {
            draw: {
                toolbar: {
                    actions: {
                        title: '取消',
                        text: '取消'
                    },
                    finish: {
                        title: '停止编辑',
                        text: '完成'
                    },
                    undo: {
                        title: '删除上一次画的点',
                        text: '删除上一个点'
                    },
                    buttons: {
                        polyline: '画线',
                        polygon: '画面',
                        rectangle: '画矩形',
                        circle: '画圆',
                        marker: '打点'
                    }
                },
                handlers: {
                    circle: {
                        tooltip: {
                            start: '点击然后拖动来画一个圆'
                        },
                        radius: '半径'
                    },
                    marker: {
                        tooltip: {
                            start: '点击地图做标记'
                        }
                    },
                    polygon: {
                        tooltip: {
                            start: '点击开始画面.',
                            cont: '继续点击画面',
                            end: '双击结束画面'
                        }
                    },
                    polyline: {
                        error: '<strong>Error:</strong> shape edges cannot cross!',
                        tooltip: {
                            start: '点击开始画线.',
                            cont: '继续点击画线',
                            end: '双击结束画线'
                        }
                    },
                    rectangle: {
                        tooltip: {
                            start: '点击并拖动画矩形'
                        }
                    },
                    simpleshape: {
                        tooltip: {
                            end: '释放鼠标完成绘图.'
                        }
                    }
                }
            },
            edit: {
                toolbar: {
                    actions: {
                        save: {
                            title: '保存修改',
                            text: '保存'
                        },
                        cancel: {
                            title: '取消编辑，丢弃所有的变化.',
                            text: '取消'
                        }
                    },
                    buttons: {
                        edit: '编辑图层.',
                        editDisabled: '没有图层可以编辑.',
                        remove: '删除图层.',
                        removeDisabled: '没有图层可以删除.'
                    }
                },
                handlers: {
                    edit: {
                        tooltip: {
                            text: '拖动句柄，或标记来编辑功能.',
                            subtext: '取消编辑，丢弃所有的变化.'
                        }
                    },
                    remove: {
                        tooltip: {
                            text: '点击一个要素删除'
                        }
                    }
                }
            }
        }
    }
})();