<template>
  <div class="TextBox">
    <h3>{{ privacy_policy.title }}</h3>
    <div class="TextBox-text">
      <p>{{ privacy_policy.text }}</p>
    </div>
  </div>
</template>

<script>
import { privacy_policy } from '@/data/text_vars'
export default {
  name: 'TextBox',
  data() {
    return {
      privacy_policy
    }
  }
}
</script>

<style lang="scss" scoped>
.TextBox {
  @include size(450px, 600px);

  background: white;
  padding: 15px;
  border-radius: 10px;

  &-text {
    overflow: auto;
    padding: 0px 10px;
    @include size(420px, 500px);
  }
}

@media screen and(max-width: 660px) {
  .TextBox {
    @include size(340px, 450px);
    &-text {
      font-size: 13px;
      @include size(300px, 360px);
    }
  }
}

@media screen and(max-width: 380px) {
  .TextBox {
    @include size(320px, 450px);
    &-text {
      font-size: 13px;
      @include size(290px, 360px);
    }
  }
}
// Scrollbar

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
