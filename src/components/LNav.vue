<template>
  <ul v-scroll-spy-active="{class: 'scrollactive-item'}" class="lnav">
  <a href='chapter[0]'><router-link :to="{name: parent, hash: chapter[0]}">{{title[0]}}</router-link></a>
  <a href='chapter[1]'><router-link :to="{name: parent, hash: chapter[1]}">{{title[1]}}</router-link></a>
  <a href='chapter[2]'><router-link :to="{name: parent, hash: chapter[2]}">{{title[2]}}</router-link></a>
  <a href='chapter[3]'><router-link :to="{name: parent, hash: chapter[3]}">{{title[3]}}</router-link></a>
  <a href='chapter[4]'><router-link :to="{name: parent, hash: chapter[4]}">{{title[4]}}</router-link></a>
  <a href='chapter[5]'><router-link :to="{name: parent, hash: chapter[5]}">{{title[5]}}</router-link></a>
  <a href='chapter[6]'><router-link :to="{name: parent, hash: chapter[6]}">{{title[6]}}</router-link></a>
</ul>
<router-view/>
</template>

<script>

export default {
    name: 'LNav',
    props: {
      parent: String,
      chapter: [],
      title: []
    },
}
</script>
