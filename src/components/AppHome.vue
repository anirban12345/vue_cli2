<template>
    
    <AppHeader />

  
        <!--
        <h1>{{title.toUpperCase()}}</h1>
        <h2>{{number+22}}</h2>
        <p v-if="isShow" v-html="html"></p>
        <p v-else-if="isShow===null">Hello from vue-else-if</p>
        <p v-else>Hello from vue else</p>
        <p>anirban seth</p>

        <p v-bind:key="i" v-for="i in 10">hii {{i}}</p>
        <p v-bind:key="i" v-for="i in dataPerson">Hii {{i}}</p>
        -->

        <h1>Persons : {{pdataCount}}</h1>
        <div v-bind:key="dp" v-for="dp in dataPersons">Hii {{dp.name}}

        <button @click="removePdata(dp)">Remove</button>
        </div>

        <!-- dynamic binding of attribute name 
        <input type="text" :[attribute]="newDataPerson.name" />
        -->
        <form @submit.prevent="addPdata">
        <input type="text" v-model="newDataPerson.name" />
        <input type="text" v-model="newDataPerson.address" />
        <input type="text" v-model="newDataPerson.phone" />
        <input type="text" v-model="newDataPerson.emailid" />
        <button type="submit">Submit</button>
        </form>

        <button @click="setNameAddress" class="btn btn-primary">Set Name Address</button>

        <p>{{nameAddress}}</p>
        <p>{{dataPerson.name}} {{dataPerson.address}}</p>


    <AppFooter />

</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {

    components:{AppHeader,AppFooter},
    
     computed:
    {
    pdataCount()
    {
      return this.dataPersons.length;
    },
    //nameAddress()   //method
    //{
      // return  `${this.dataPerson.name} ${this.dataPerson.address}`;
    //},
    nameAddress:  //property
    {
       get()
       {
        return `Person Details : ${this.dataPerson.name} ${this.dataPerson.address}`;
       },
       set(nameAddress)
       {
          //alert(nameAddress)
          const val=nameAddress.split(" ")
          this.dataPerson.name=val[0];
          this.dataPerson.address=val[1];       
       }
    }
  },
  methods:{
    addPdata()
    {
      if(this.newDataPerson.name!=='')
      {
          this.dataPersons.push(
                            {
                              name:this.newDataPerson.name,
                              address:this.newDataPerson.address,
                              phone:this.newDataPerson.phone,
                              emailid:this.newDataPerson.emailid
                              });

          this.newDataPerson.name=''                    
          this.newDataPerson.address=''                    
          this.newDataPerson.phone=''                    
          this.newDataPerson.emailid=''                    
      }
    },
    removePdata(dp)
    {
      console.log(dp.name);
      //this.dataPersons=
      //console.log(this.dataPersons.filter((dp,i) => i!=index))
      this.dataPersons=this.dataPersons.filter((pdata)=>pdata.name!==dp.name)
    },
    setNameAddress()
    {
        this.nameAddress="Namita Khardaha"
    }
  },
  data()
  {
    return {
      title:"Heyy From Vue from title",
      number:12,
      html:"<h3>Hello from vue-html and v-if</h3>",            
      isShow:true,
      attribute:"value",
      newDataPerson:{
                    name:'Rahul',        
                    address:'Kolkata',
                    phone:'66554 - 45578',
                    emailid:'rahul5321@gmail.com'
      },
      dataPerson:{
                    name:'Sourav',        
                    address:'Kolkata',
                    phone:'99887 - 76655',
                    emailid:'sourav45321@gmail.com'
                  },
      dataPersons:[ 
                    {
                    name:'Anirban',        
                    address:'Kolkata',
                    phone:'99887 - 76655',
                    emailid:'anirban45321@gmail.com'
                    },
                    {
                    name:'Gargi',        
                    address:'Dakhineswar',
                    phone:'88552 - 99778',
                    emailid:'gargi45321@gmail.com'
                    }
                    ],
      }
  }
}

</script>