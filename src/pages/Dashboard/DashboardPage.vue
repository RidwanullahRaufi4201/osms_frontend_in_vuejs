<template>
    <body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">

    <!-- Sidebar -->
    <ul style="background:#ff5722;" class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <router-link to="/dashboard" class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">{{ store.user.name }}</div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Dasbhoard</span>
            </router-link>
        
        </li>
    <div v-if="store.user.privilege==1">
      
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/workorder" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Work Order</span>
            </router-link>
        
        </li>
           <!-- Nav Item - Pages Collapse Menu -->
           <li class="nav-item">
            <router-link to="/requests" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Requests</span>
            </router-link>
        
        </li>
  
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Assets</span>
            </router-link>
        
        </li>
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
            <router-link to="/technicains" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Technician</span>
            </router-link>
        
        </li>
  
       <!-- Nav Item - Pages Collapse Menu -->
       <li class="nav-item">
            <router-link to="/requesters" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Requester</span>
            </router-link>
        
        </li>
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
            <router-link to="/contactusdashboard" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Contact Us</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Sell Report</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Work Report</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Change Password</span>
            </router-link>
        
        </li>
  
    </div>
    <div v-else>
  
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <router-link to="/profile" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Profile</span>
            </router-link>
        
        </li>
        
                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
            <router-link to="/submitrequest" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Submit Request</span>
            </router-link>
        
        </li>
                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
            <router-link to="/requeststatus" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Service Status</span>
            </router-link>
        
        </li>
              <!-- Nav Item - Pages Collapse Menu -->
              <li class="nav-item">
            <router-link to="/changepassword" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Change Password</span>
            </router-link>
        
        </li>


    </div>




    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

           

                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">

                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <!-- Nav Item - Alerts -->
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell fa-fw"></i>
                            <!-- Counter - Alerts -->
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                        <!-- Dropdown - Alerts -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">
                                Alerts Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    <!-- Nav Item - Messages -->
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope fa-fw"></i>
                            <!-- Counter - Messages -->
                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">
                                Message Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="...">
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="...">
                                    <div class="status-indicator"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div class="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="...">
                                    <div class="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="...">
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                              <!-- Nav Item - User Information -->
                              <li  class="nav-item dropdown no-arrow">
                        <a  @click="handleLogout" class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-white small p-2 rounded"  style="background:#ff5722;" >Logout</span>
                        
                        </a>
                     
                    </li>


                </ul>

            </nav>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid ">

                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                <!-- Content Row -->
                <div class="row justify-content-center">

                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <span v-if="store.user.privilege==1">    Requests Recived</span> 
                                        <span v-else>    Total Request</span> </div>

                                        <div v-if="store.user.privilege==1" class="h5 mb-0 font-weight-bold text-gray-800">{{ allRequestCounts }}</div>
                                        <div  v-else class="h5 mb-0 font-weight-bold text-gray-800">{{totalRequest }}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                           <span v-if="store.user.privilege==1"> Assiged Work</span>
                                           <span v-else> Accepted Request</span>
                                            </div>
                                            <div    v-if="store.user.privilege==1" class="h5 mb-0 font-weight-bold text-gray-800">{{ assignwork }}</div>
                                             <div v-else  class="h5 mb-0 font-weight-bold text-gray-800">{{ totalAcceptedRequest }}</div>
                                        
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            <span v-if="store.user.privilege==1">No.of Technician</span>
                                           <span v-else>Pending Requests</span> </div>
                                           <div v-if="store.user.privilege==1" class="h5 mb-0 font-weight-bold text-gray-800">{{ NoTechnicains }}</div>
                                          <div  v-else class="h5 mb-0 font-weight-bold text-gray-800">{{ totalPendingRequest }}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content Row -->

                <div class="row">

                    <!-- Area Chart -->
                    <div class="col-xl-12 col-lg-7">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary" v-if="store.user.privilege==1">List of Requesters</h6>
                                <h6 class="m-0 font-weight-bold text-primary" v-else>Total Requests</h6>

                                
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="chart-area">
                                   
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table  v-if="allRequests && store.user.privilege==2" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Request Info
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Address 
                </th>
                <th scope="col" class="px-6 py-3">
                    City
                </th>
                <th scope="col" class="px-6 py-3">
                    Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>

                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="request in allRequests" :key="request.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ request.id }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ request.requestInfo }}
                </th>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{request.name}}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ request.addressOne }}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{request.city}}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{request.mobile}}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{request.request_status}}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
         
         
        </tbody>
    </table>
    <div v-else >
        <table v-if="allRequestsformusers"  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Requester ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
              

               
            </tr>
        </thead>
        <tbody>
            <tr  v-for="request in allRequestsformusers" :key="request.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ request.id }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ request.requestInfo }}
                </th>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{request.email}}
                </td>
                
            </tr>
         
         
        </tbody>
    </table>
    <div v-else>
          <p class="text-center "><strong>No Pending Request have Been Left </strong> </p>
    </div>
    </div>
  
</div>

                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>

                <!-- Content Row -->
                <div class="row">

                    <!-- Content Column -->
                    <div class="col-lg-6 mb-4">

                        <!-- Project Card Example -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            <div class="card-body">
                                <h4 class="small font-weight-bold">Server Migration <span
                                        class="float-right">20%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Sales Tracking <span
                                        class="float-right">40%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Customer Database <span
                                        class="float-right">60%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar" role="progressbar" style="width: 60%"
                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Payout Details <span
                                        class="float-right">80%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Account Setup <span
                                        class="float-right">Complete!</span></h4>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Color System -->
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-primary text-white shadow">
                                    <div class="card-body">
                                        Primary
                                        <div class="text-white-50 small">#4e73df</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-success text-white shadow">
                                    <div class="card-body">
                                        Success
                                        <div class="text-white-50 small">#1cc88a</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-info text-white shadow">
                                    <div class="card-body">
                                        Info
                                        <div class="text-white-50 small">#36b9cc</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-warning text-white shadow">
                                    <div class="card-body">
                                        Warning
                                        <div class="text-white-50 small">#f6c23e</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-danger text-white shadow">
                                    <div class="card-body">
                                        Danger
                                        <div class="text-white-50 small">#e74a3b</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-secondary text-white shadow">
                                    <div class="card-body">
                                        Secondary
                                        <div class="text-white-50 small">#858796</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-light text-black shadow">
                                    <div class="card-body">
                                        Light
                                        <div class="text-black-50 small">#f8f9fc</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-dark text-white shadow">
                                    <div class="card-body">
                                        Dark
                                        <div class="text-white-50 small">#5a5c69</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6 mb-4">

                        <!-- Illustrations -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div class="card-body">
                                <div class="text-center">
                                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                        src="img/undraw_posting_photo.svg" alt="...">
                                </div>
                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                        target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                    constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</a>
                            </div>
                        </div>

                        <!-- Approach -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div class="card-body">
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classes are used to create
                                    custom components and custom utility classes.</p>
                                <p class="mb-0">Before working with this theme, you should become familiar with the
                                    Bootstrap framework, especially the utility classes.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2021</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>




</body>
</template>

<script setup>
import '../../assets/css/dashboard.css'
import '../../assets/js/jquery.min.js'
import '../../assets/js/bootstrap.js'
import '../../assets/js/easing.js'
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';
import {ref,onMounted} from 'vue'
import api from '../../http/api';
const store=useAuthStore()
const router=useRouter()

const handleLogout=async()=>{
         await store.handleLogout()
         router.push("/login")
   }

const totalRequest=ref(0)
const totalPendingRequest=ref(0)
const totalAcceptedRequest=ref(0)
const allRequests=ref(null)
const allRequestsformusers=ref(null)
const allRequestCounts=ref(0)


const getTotalRequest=async()=>{
    try{
      const data=await api.get(`api/getTotalRequest/${store.user.id}`)
      totalRequest.value=data.data.data
    }catch(error){
        console.log(error)
    }
}

const getTotalPendingRequest=async()=>{
    try{
      const totalpendings=await api.get(`api/totalpendingrequest/${store.user.id}`);
        totalPendingRequest.value=totalpendings.data.data
    }catch(error){
        console.log(error)
    }
}

const getTotalAcceptedRequest=async()=>{
    try{
      const totalAccepted=await api.get(`api/totalacceptedrequest/${store.user.id}`);
      totalAcceptedRequest.value=totalAccepted.data.data
    }catch(error){
        console.log(error)
    }
}


const getAllRequests=async()=>{
    try{
      const data=await api.get(`api/getTotalRequests/${store.user.id}`)
      allRequests.value=data.data.requests
    }catch(error){
        console.log(error)
    }
}


const getAllUsersRequests=async()=>{

       try{
       const data=await api.get(`api/getTotalRequest`)
       console.log(data.data.request)
       if(data.data.request.length){
        allRequestsformusers.value=data.data.request
       }else{
        allRequestsformusers.value=null

       }

       }catch(error){
        console.log(error)
       }

}

const getAllUsersRequestsCount=async()=>{

try{
const data=await api.get(`api/getTotalRequestCount`)
allRequestCounts.value=data.data.request


}catch(error){
 console.log(error)
}

}

const assignwork=ref(null)
const getAssignWorkCount=async()=>{
    try{
        const data=await api.get(`api/assignwork`)
        assignwork.value=data.data.assignedWork
    }catch(error)
    {
        console.log(error)
    }
}

const NoTechnicains=ref(null)
const getNoTechnicains=async()=>{
    try{
        const data=await api.get(`api/getalltechinicainscount`)
        NoTechnicains.value=data.data.technicains

    }catch(error){
        console.log(error)
    }
}



onMounted(()=>{
    getTotalRequest()
    getTotalPendingRequest()
    getTotalAcceptedRequest()
    getAllRequests()
    getAllUsersRequests()
    getAllUsersRequestsCount()
    getAssignWorkCount()
    getNoTechnicains()

})

</script>

<style scoped>


.router-link-active{
    font-weight: bolder;
    color: white;
    font-size: large;
}
</style>