<template>
  <div>
      <b-row class="d-flex justify-content-center">
          <b-col sm="10" md="6" lg="4">
              <b-form>
                  <b-input-group>
                      <b-input-group-prepend>
                        <v-fa icon="user-circle" class="mx-auto" size="lg"></v-fa>
                      </b-input-group-prepend>

                      <b-form-input
                        id="input-1"
                        required
                        placeholder="Enter ID"
                        ></b-form-input>
                  </b-input-group>

                  <b-input-group>
                    <b-input-group-prepend>
                        <v-fa icon="lock" size="lg"></v-fa>
                    </b-input-group-prepend>

                    <b-form-input
                      id="input-2"
                      type="password"
                      required
                      placeholder="Enter password"
                    ></b-form-input>
                  </b-input-group>

                  <b-button type="submit" variant="primary">Login</b-button>
                </b-form>
          </b-col>
      </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>
