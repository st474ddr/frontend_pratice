<template>
<div>
    <h1>this is video main page </h1>
    <router-link :to="{name:'info'}">Info</router-link> |
    <router-link :to="{name:'info'}">Content</router-link>
    <router-view/>
    </div>
</template>