<template>
  <div class="about">
    <!--    <h3>cost display standard</h3>-->
    <br>
    <h1>{{ saying }}</h1>
        <div v-for="n in costCalculated" :key="n.id">
          <p> {{ n }} </p>
        </div>


  </div>
</template>


<script>
export default {
  data() {
    return {
      cost: [
        { id: 1, current_price: 0.03408772054151 },
        { id: 2, current_price: 24.07845258390245 },
        { id: 3, current_price: 13.92718804189361 },
        { id: 4, current_price: 158.9856767330143 },
        { id: 5, current_price: 4.11871883045218 },
        { id: 6, current_price: 4000.05296680227347 },
        { id: 7, current_price: 300.1234 },
      ],
      saying: "good day!"
    };
  },

  // TDD (Test Driven Development, 테스트 주도 개발)
  // 테스트를 먼저 하고, 그 다음 개발한다
  // 테스트를 하기 전에 요구사항을 분석하고, 분석한대로 동작할 것임을 테스트로 나타낸 후, 테스트가 성공할 때 까지 개발을 실행한다.
  // 코드를 오래 가지고 있지 않는다면, 사실 필요없음
  // 하지만 계속해서 코드를 유지보수하고, 기능을 덧붙이면서, 사람이 기억할 수 있는데는 한계가 있기 때문에
  // 코드로 요구사항을 남겨두고, 자동으로 체크하게 하는 것
  // 코드를 고쳐는데 에러가 난다면, 기존 요구사항과 충돌하는 것이므로, 요구사항에 대한 정의를 다시 하거나, 잘못된 코드를 테스트 코드(요구사항)에 맞추는것

  // costCalculated
  // 1. costCalculated는 배열을 반환한다.
  // 2. 2자리를 초과하는 수는 소수점 아래 한자리까지만 출력한다
  // 3-1. 2자리 이하이면서, 0이 아닌 수는 소수점 아래 세자리까지만 출력한다
  // 3-2. 2자리 이하이면서, 0인 수는 소수점 아래 6자리까지 출력한다

  computed: {
    // costCalculated: [0.000000, 24.0, 13.0, 158.0, 4.0, 4000.0]
    // costCalculated() {
    //   return this.cost.map((_, idx) => {
    //     let newNumber = Math.floor(this.cost[idx].current_price);
    //     let newNumberString = String(newNumber);
    //
    //     if (newNumberString.length <= 2) {
    //       // return this.cost[0].current_price.toFixed(6);
    //       if (newNumber === 0) {
    //         return this.cost[idx].current_price.toFixed(6);
    //       }
    //       return this.cost[idx].current_price.toFixed(3);
    //     } else {
    //       return this.cost[idx].current_price.toFixed(1);
    //     }
    //   });
    // },
    // eslint-disable-next-line
    // costCal() {
    //   let arr = [];
    //   for (let i = 0; i < this.cost.length; i++) {
    //     let costValue = Math.floor(this.cost[i].current_price);
    //     let costValueString = String(costValue);
    //
    //     if (costValueString.length <= 2) {
    //       if (costValue === 0) {
    //         arr.push(this.cost[i].current_price.toFixed(6));
    //       } else if (costValue !== 0) {
    //         arr.push(this.cost[i].current_price.toFixed(3));
    //       }
    //     } else {
    //       arr.push(this.cost[i].current_price.toFixed(1));
    //     }
    //   }
    //   return arr;
    // }
  }
};
</script>

<style scoped>

</style>
