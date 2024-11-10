---
layout: post
title:  "开发文档"
date:   2024-11-10 13:23:31 +0800
categories: jekyll update
---

# 开发文档

* 谱面

谱面后缀为d3 内部格式为lua table的格式

## 谱面基本格式：

        {

        bpm_list = { --bpm列表 bpm_list中至少有一个bpm

        {beat = {0,0,1},bpm = 120},

        },

        note = {}, --note

        event = {}, --event

        effect = {}, --暂时没有用

        offset = 0 , --偏移值

        info = {  --谱面基本信息

        song_name = [[]], --歌曲名

        chart_name = [[]], --谱面名

        chartor = [[]], --谱师

        artist = [[]], --曲师

        }
        }
        
## 细则：

*  beat的3个数值分别为beat的整数部分 分数分子 分数分母 大小为beat[1] + beat[2] / beat[3]

* note结构：

        {track=5, --所在轨道
        beat={6,4,4}, --note的beat
        beat2={6,4,4}, --仅在type为hold时有用 为hold尾部beat
        type='hold', --有三种 note wipe hold
        fake=0,  --为1时为假note
        }

* event结构：

        {track=3, --所在轨道
        beat={4,1,1,}, --event头部的beat
        beat2={5,1,4,}, --event尾部的beat
        trans={0,0,1,1,}, --bezier的坐标点 只能为三阶bezier曲线
        form=100, --event起始值
        type='x', --类型有x w x为轨道中心所在坐标 w为轨道宽度
        to=0, --event终点值
        }
