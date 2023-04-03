<template>
  <div class="bg-gray-50 mb-52">
    <UtilsTheHeader />
    <UtilsTheNavbar />
    <div class="container mx-auto md:container md:mx-auto px-4 mt-6">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <div class="grid grid-cols-10 gap-1">
            <ContentTheSlider class="col-span-1" />
            <div class="col-span-9">
              <div class="img-container relative">
                <img class="w-full" src="@/assets/images/big.svg" alt="big" />
                <ContentPersonInfo />
                <ContentRightAbsolute />
                <ContentLeftAbsolute />
                <ContentSellerMessage />
                <ContentAuctionDetails />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <ContentBroadcastDate />
          <ContentTheContenders />
          <ContentTheInfo />
          <ContentTheFavorite />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>



</style>
