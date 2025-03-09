import{_ as n,c as t,o as a,ae as o}from"./chunks/framework.Dh1jimFm.js";const s=JSON.parse('{"title":"开发文档","description":"","frontmatter":{},"headers":[],"relativePath":"2024-11-10-development_documentation.md","filePath":"2024-11-10-development_documentation.md"}'),r={name:"2024-11-10-development_documentation.md"};function l(i,e,d,p,c,_){return a(),t("div",null,e[0]||(e[0]=[o(`<h1 id="开发文档" tabindex="-1">开发文档 <a class="header-anchor" href="#开发文档" aria-label="Permalink to &quot;开发文档&quot;">​</a></h1><ul><li>谱面</li></ul><p>谱面后缀为d3 内部格式为lua table的格式</p><h2 id="谱面基本格式" tabindex="-1">谱面基本格式： <a class="header-anchor" href="#谱面基本格式" aria-label="Permalink to &quot;谱面基本格式：&quot;">​</a></h2><pre><code>    {

    bpm_list = { --bpm列表 bpm_list中至少有一个bpm

    {beat = {0,0,1},bpm = 120},

    },

    note = {}, --note

    event = {}, --event

    effect = {}, --整体影响 可以做些特效

    offset = 0 , --偏移值

    info = {  --谱面基本信息

    song_name = [[]], --歌曲名

    chart_name = [[]], --谱面名

    chartor = [[]], --谱师

    artist = [[]], --曲师

    }
    }
</code></pre><h3 id="细则" tabindex="-1">细则： <a class="header-anchor" href="#细则" aria-label="Permalink to &quot;细则：&quot;">​</a></h3><ul><li><p>beat的3个数值分别为beat的整数部分 分数分子 分数分母 大小为beat[1] + beat[2] / beat[3]</p></li><li><p>note结构：</p><pre><code>  {track=5, --所在轨道
  beat={6,4,4}, --note的beat
  beat2={6,4,4}, --仅在type为hold时有用 为hold尾部beat
  type=&#39;hold&#39;, --有三种 note wipe hold
  fake=0,  --为1时为假note
  }
</code></pre></li><li><p>event结构：</p><pre><code>  {track=3, --所在轨道
  beat={4,1,1,}, --event头部的beat
  beat2={5,1,4,}, --event尾部的beat
  trans={0,0,1,1,}, --bezier的坐标点 只能为三阶bezier曲线
  from=100, --event起始值 --版本小于等于0.2.0的为form（打错字了）
  type=&#39;x&#39;, --类型有x w x为轨道中心所在坐标 w为轨道宽度
  to=0, --event终点值
  }
</code></pre></li></ul>`,7)]))}const b=n(r,[["render",l]]);export{s as __pageData,b as default};
