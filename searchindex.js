Search.setIndex({docnames:["gnn_reco","gnn_reco.components","gnn_reco.data","gnn_reco.legacy","gnn_reco.models","gnn_reco.models.detector","gnn_reco.models.gnn","gnn_reco.models.task","gnn_reco.models.training","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["gnn_reco.rst","gnn_reco.components.rst","gnn_reco.data.rst","gnn_reco.legacy.rst","gnn_reco.models.rst","gnn_reco.models.detector.rst","gnn_reco.models.gnn.rst","gnn_reco.models.task.rst","gnn_reco.models.training.rst","index.rst","modules.rst"],objects:{"":[[0,0,0,"-","gnn_reco"]],"gnn_reco.components":[[1,0,0,"-","layers"],[1,0,0,"-","loss_functions"],[1,0,0,"-","utils"]],"gnn_reco.components.layers":[[1,1,1,"","DynEdgeConv"]],"gnn_reco.components.layers.DynEdgeConv":[[1,2,1,"","forward"]],"gnn_reco.components.loss_functions":[[1,1,1,"","LogCMK"],[1,1,1,"","LogCoshLoss"],[1,1,1,"","LossFunction"],[1,1,1,"","VonMisesFisher2DLoss"],[1,1,1,"","VonMisesFisherLoss"]],"gnn_reco.components.loss_functions.LogCMK":[[1,2,1,"","backward"],[1,2,1,"","forward"]],"gnn_reco.components.loss_functions.LogCoshLoss":[[1,2,1,"","_forward"],[1,2,1,"","_log_cosh"],[1,3,1,"","reduction"]],"gnn_reco.components.loss_functions.LossFunction":[[1,2,1,"","_forward"],[1,2,1,"","forward"],[1,3,1,"","reduction"]],"gnn_reco.components.loss_functions.VonMisesFisher2DLoss":[[1,2,1,"","_forward"],[1,3,1,"","reduction"],[1,3,1,"","training"],[1,3,1,"","weight"]],"gnn_reco.components.loss_functions.VonMisesFisherLoss":[[1,2,1,"","_evaluate"],[1,2,1,"","log_cmk_approx"],[1,2,1,"","log_cmk_exact"],[1,3,1,"","reduction"],[1,3,1,"","training"],[1,3,1,"","weight"]],"gnn_reco.components.utils":[[1,1,1,"","EarlyStopping"],[1,1,1,"","MultipleDatasetsTrainer"],[1,1,1,"","PiecewiseLinearScheduler"],[1,1,1,"","Predictor"],[1,1,1,"","Trainer"],[1,4,1,"","check_db_size"],[1,4,1,"","fit_scaler"],[1,4,1,"","make_dataloader"],[1,4,1,"","make_train_validation_dataloader"],[1,4,1,"","save_results"]],"gnn_reco.components.utils.EarlyStopping":[[1,2,1,"","GetBestParams"],[1,2,1,"","step"]],"gnn_reco.components.utils.PiecewiseLinearScheduler":[[1,2,1,"","get_next_lr"]],"gnn_reco.data":[[2,0,0,"-","constants"],[2,0,0,"-","dataconverter"],[2,0,0,"-","i3extractor"],[2,0,0,"-","sqlite_dataconverter"],[2,0,0,"-","sqlite_dataset"],[2,0,0,"-","utils"]],"gnn_reco.data.constants":[[2,1,1,"","FEATURES"],[2,1,1,"","TRUTH"]],"gnn_reco.data.constants.FEATURES":[[2,3,1,"","ICECUBE86"]],"gnn_reco.data.constants.TRUTH":[[2,3,1,"","ICECUBE86"]],"gnn_reco.data.dataconverter":[[2,1,1,"","DataConverter"]],"gnn_reco.data.i3extractor":[[2,1,1,"","I3Extractor"],[2,1,1,"","I3ExtractorCollection"],[2,1,1,"","I3FeatureExtractor"],[2,1,1,"","I3RetroExtractor"],[2,1,1,"","I3TruthExtractor"],[2,4,1,"","find_data_type"],[2,4,1,"","frame_contains_classifiers"],[2,4,1,"","frame_contains_retro"],[2,4,1,"","frame_is_montecarlo"],[2,4,1,"","get_primary_particle_interaction_type_and_elasticity"]],"gnn_reco.data.i3extractor.I3Extractor":[[2,2,1,"","__call__"],[2,2,1,"","_load_gcd_data"],[2,2,1,"","set_files"]],"gnn_reco.data.i3extractor.I3ExtractorCollection":[[2,2,1,"","set_files"]],"gnn_reco.data.i3extractor.I3FeatureExtractor":[[2,2,1,"","__call__"],[2,2,1,"","_get_om_keys_and_pulseseries"]],"gnn_reco.data.i3extractor.I3RetroExtractor":[[2,2,1,"","__call__"]],"gnn_reco.data.i3extractor.I3TruthExtractor":[[2,2,1,"","__call__"]],"gnn_reco.data.sqlite_dataconverter":[[2,1,1,"","SQLiteDataConverter"],[2,4,1,"","apply_event_no"],[2,4,1,"","is_empty"],[2,4,1,"","save_to_sql"]],"gnn_reco.data.sqlite_dataconverter.SQLiteDataConverter":[[2,2,1,"","__init__"],[2,2,1,"","_attach_index"],[2,2,1,"","_create_empty_tables"],[2,2,1,"","_create_table"],[2,2,1,"","_extract_everything"],[2,2,1,"","_merge_databases"],[2,2,1,"","_merge_temporary_databases"],[2,2,1,"","_parallel_extraction"],[2,2,1,"","_process_files"],[2,2,1,"","_save_filenames"],[2,2,1,"","_submit_to_database"]],"gnn_reco.data.sqlite_dataset":[[2,1,1,"","SQLiteDataset"]],"gnn_reco.data.sqlite_dataset.SQLiteDataset":[[2,2,1,"","_create_graph"],[2,2,1,"","_query_database"],[2,2,1,"","close_connection"],[2,2,1,"","establish_connection"]],"gnn_reco.data.utils":[[2,4,1,"","create_out_directory"],[2,4,1,"","find_i3_files"],[2,4,1,"","frame_has_key"],[2,4,1,"","get_even_neutrino_indicies"],[2,4,1,"","get_even_signal_background_indicies"],[2,4,1,"","has_extension"],[2,4,1,"","is_gcd_file"],[2,4,1,"","is_i3_file"],[2,4,1,"","pairwise_shuffle"]],"gnn_reco.legacy":[[3,0,0,"-","original"],[3,0,0,"-","reimplemented"]],"gnn_reco.legacy.original":[[3,1,1,"","ConvNet"],[3,1,1,"","Dynedge"],[3,1,1,"","EarlyStopping"],[3,1,1,"","PiecewiseLinearScheduler"],[3,1,1,"","Predictor"],[3,1,1,"","Trainer"],[3,4,1,"","custom_crossentropy_loss"],[3,4,1,"","log_cosh"],[3,4,1,"","vonmises_sinecosine_loss"]],"gnn_reco.legacy.original.ConvNet":[[3,2,1,"","__init__"],[3,2,1,"","forward"],[3,3,1,"","training"]],"gnn_reco.legacy.original.Dynedge":[[3,2,1,"","forward"],[3,3,1,"","training"]],"gnn_reco.legacy.original.EarlyStopping":[[3,2,1,"","GetBestParams"],[3,2,1,"","step"]],"gnn_reco.legacy.original.PiecewiseLinearScheduler":[[3,2,1,"","get_next_lr"]],"gnn_reco.legacy.reimplemented":[[3,1,1,"","LegacyAngularReconstruction"],[3,1,1,"","LegacyVonMisesFisherLoss"]],"gnn_reco.legacy.reimplemented.LegacyAngularReconstruction":[[3,3,1,"","nb_inputs"],[3,3,1,"","training"]],"gnn_reco.legacy.reimplemented.LegacyVonMisesFisherLoss":[[3,2,1,"","_forward"],[3,3,1,"","reduction"],[3,3,1,"","training"],[3,3,1,"","weight"]],"gnn_reco.models":[[5,0,0,"-","detector"],[6,0,0,"-","gnn"],[4,0,0,"-","graph_builders"],[4,0,0,"-","model"],[7,0,0,"-","task"],[8,0,0,"-","training"],[4,0,0,"-","utils"]],"gnn_reco.models.detector":[[5,0,0,"-","detector"],[5,0,0,"-","icecube86"]],"gnn_reco.models.detector.detector":[[5,1,1,"","Detector"]],"gnn_reco.models.detector.detector.Detector":[[5,2,1,"","_forward"],[5,5,1,"","features"],[5,2,1,"","forward"],[5,5,1,"","nb_inputs"],[5,5,1,"","nb_outputs"],[5,3,1,"","training"]],"gnn_reco.models.detector.icecube86":[[5,1,1,"","IceCube86"]],"gnn_reco.models.detector.icecube86.IceCube86":[[5,2,1,"","_forward"],[5,3,1,"","features"],[5,3,1,"","training"]],"gnn_reco.models.gnn":[[6,0,0,"-","convnet"],[6,0,0,"-","dynedge"],[6,0,0,"-","gnn"]],"gnn_reco.models.gnn.convnet":[[6,1,1,"","ConvNet"]],"gnn_reco.models.gnn.convnet.ConvNet":[[6,2,1,"","__init__"],[6,2,1,"","forward"],[6,3,1,"","training"]],"gnn_reco.models.gnn.dynedge":[[6,1,1,"","DynEdge"]],"gnn_reco.models.gnn.dynedge.DynEdge":[[6,2,1,"","__init__"],[6,2,1,"","forward"],[6,3,1,"","training"]],"gnn_reco.models.gnn.gnn":[[6,1,1,"","GNN"]],"gnn_reco.models.gnn.gnn.GNN":[[6,5,1,"","nb_inputs"],[6,5,1,"","nb_outputs"],[6,3,1,"","training"]],"gnn_reco.models.graph_builders":[[4,1,1,"","GraphBuilder"],[4,1,1,"","KNNGraphBuilder"]],"gnn_reco.models.model":[[4,1,1,"","Model"]],"gnn_reco.models.model.Model":[[4,2,1,"","compute_loss"],[4,2,1,"","forward"],[4,2,1,"","to"],[4,3,1,"","training"]],"gnn_reco.models.task":[[7,0,0,"-","reconstruction"],[7,0,0,"-","task"]],"gnn_reco.models.task.reconstruction":[[7,1,1,"","AngularReconstruction"],[7,1,1,"","AngularReconstructionWithKappa"],[7,1,1,"","AngularReconstructionWithUncertainty"],[7,1,1,"","EnergyReconstruction"],[7,1,1,"","EnergyReconstructionWithUncertainty"]],"gnn_reco.models.task.reconstruction.AngularReconstruction":[[7,3,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.task.reconstruction.AngularReconstructionWithKappa":[[7,3,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.task.reconstruction.AngularReconstructionWithUncertainty":[[7,3,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.task.reconstruction.EnergyReconstruction":[[7,3,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.task.reconstruction.EnergyReconstructionWithUncertainty":[[7,3,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.task.task":[[7,1,1,"","Task"]],"gnn_reco.models.task.task.Task":[[7,2,1,"","_forward"],[7,2,1,"","compute_loss"],[7,2,1,"","forward"],[7,5,1,"","nb_inputs"],[7,3,1,"","training"]],"gnn_reco.models.training":[[8,0,0,"-","callbacks"],[8,0,0,"-","trainers"],[8,0,0,"-","utils"]],"gnn_reco.models.training.callbacks":[[8,1,1,"","EarlyStopping"],[8,1,1,"","PiecewiseLinearScheduler"]],"gnn_reco.models.training.callbacks.EarlyStopping":[[8,2,1,"","get_best_params"],[8,2,1,"","step"]],"gnn_reco.models.training.callbacks.PiecewiseLinearScheduler":[[8,2,1,"","get_next_lr"]],"gnn_reco.models.training.trainers":[[8,1,1,"","MultipleDatabasesTrainer"],[8,1,1,"","Predictor"],[8,1,1,"","Trainer"]],"gnn_reco.models.training.utils":[[8,4,1,"","make_train_validation_dataloader"],[8,4,1,"","save_results"]],"gnn_reco.models.utils":[[4,4,1,"","calculate_xyzt_homophily"]],"gnn_reco.utils":[[0,4,1,"","eps_like"]],gnn_reco:[[1,0,0,"-","components"],[2,0,0,"-","data"],[3,0,0,"-","legacy"],[4,0,0,"-","models"],[0,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:property"},terms:{"0":[1,2,3,4,6,8],"04616":1,"0th":[1,3],"1":[1,2,3,4,7],"10":[1,3,8],"10000":2,"128":[3,6],"1812":1,"1st":[1,3],"2":[1,2,4,7],"2019":1,"2d":1,"2nd":3,"3":[1,3,6,7],"3d":3,"4":6,"57208704":4,"6":1,"8":1,"86":5,"abstract":[1,2,5,7],"boolean":[1,2],"case":2,"catch":2,"class":[1,2,3,4,5,6,7,8],"default":[1,2,5,6],"do":1,"final":[1,2,5,7],"float":[2,6],"function":[1,2,3,4,5,7],"import":2,"int":[1,2,3,4,5,6,7],"return":[0,1,2,3,4,5,6],"static":1,"switch":3,"true":[1,3,8],"while":[3,5,7],A:[1,2],AND:1,AS:1,BE:1,BUT:1,FOR:1,IN:1,IS:1,If:1,In:2,It:1,NO:1,NOT:1,No:2,OF:1,OR:1,THE:1,TO:1,The:[1,2],WITH:1,_____________________:1,__call__:2,__init__:[2,3,6],_appli:4,_attach_index:2,_create_empty_t:2,_create_graph:2,_create_t:2,_evalu:1,_extract_everyth:2,_featur:5,_forward:[1,3,5,7],_get_om_keys_and_pulseseri:2,_load_gcd_data:2,_log_cosh:1,_merge_databas:2,_merge_temporary_databas:2,_parallel_extract:2,_process_fil:2,_query_databas:2,_save_filenam:2,_submit_to_databas:2,_weightedloss:1,abc:[2,4],abov:1,accept:1,accross:2,across:[1,2,4],act:1,action:1,adjac:5,adjanc:2,afterward:[3,5,7],aggr:1,all:[1,3,5,6,7],alloc:2,also:1,altern:1,although:[3,5,7],an:[1,2,3],angl:[1,3],angular:3,angularreconstruct:7,angularreconstructionwithkappa:7,angularreconstructionwithuncertainti:7,ani:1,appli:[2,4],apply_event_no:2,ar:2,arbitrari:1,architectur:[3,6],archiv:[1,8],arg:1,argument:[1,2],aris:1,arr:3,associ:[1,2],assum:[4,5,7],attach:2,attribut:[1,2],author:[1,6],autograd:1,automat:1,avail:2,averag:1,avoid:[1,2],azimuth:[2,3],backward:1,base:[1,2,3,4,5,6,7,8],batch:[1,3,4],batch_siz:[1,3,4,8],becaus:2,been:1,befor:2,bessel:1,between:3,blob:1,bool:[1,2,3,4,5,6,7],build:5,c:1,calcul:[1,3,4],calculate_xyzt_homophili:4,call:[2,3,5,7],callabl:[1,3],callback:[0,4],can:1,care:[3,5,7],chain:4,chang:1,charg:[1,2,5],check:2,check_db_siz:1,chosen:2,claim:1,classif:3,classmethod:1,close_connect:2,collect:1,column:[1,2,3,4],com:[1,4],common:4,comparison:1,compon:[0,3,4,7,10],comput:[1,3,4,5,7],compute_loss:[4,7],condit:1,connect:[1,2,5],constant:[0,10],contain:[1,2],content:10,context:1,contract:1,conv:1,convert:2,convnet:[0,3,4],copi:1,copyright:1,core:[2,6],correct:1,correpond:2,correspond:[1,2],cosh:1,cosin:3,creat:2,create_out_directori:2,csv:2,ctx:1,cuda:4,current:2,custom_crossentropy_loss:3,d:1,damag:1,data:[0,1,3,4,5,6,7,10],databas:[2,8],database_indic:1,databaseerror:2,dataconvert:[0,10],datafam:2,datafram:2,dataload:[1,2,3,8],dataset:2,db:[1,2,8],db_file:2,db_name:2,deal:1,defin:[1,3,5,7],delet:2,describ:3,descript:[2,6],desir:2,detector:[0,4],determin:2,devic:[1,3,4,8],dict:[2,5],dictionari:2,differ:[1,3],differenti:1,dimens:[1,3,6],dimension:1,dimenson:1,dir:2,directori:2,disk:2,distribut:1,ditto:1,document:1,doe:[2,6],doesnt:2,dom_i:[2,5],dom_tim:[2,5],dom_x:[2,5],dom_z:[2,5],drop:6,dropout_ratio:6,dtype:[0,2],due:2,dure:1,dynedg:[0,3,4],dynedgeconv:1,e:[1,2,3,4,6],each:[1,2,4],early_stop:[1,3,8],earlystop:[1,3,8],edg:3,edge_attr:2,edge_conv:1,edge_index:[1,4],edge_weight:2,edgeconv:1,either:[1,2],elast:2,elementwis:[1,3],email:6,empti:2,end_lr:[1,3,8],energi:2,energyreconstruct:7,energyreconstructionwithuncertainti:7,ensur:2,ep:0,eps_lik:0,error:2,establish_connect:2,estim:[1,3],etc:2,even:[1,2],event:[1,2],event_count:2,event_no:2,event_no_list:2,everi:[2,3,5,7],everyth:2,exact:1,exampl:1,exist:2,exponenti:1,express:1,extens:2,extract:[1,2,3],extractor:2,fals:[1,2,3,4,8],featur:[1,2,3,4,5,6,8],feature_big:2,features_subset:1,file:[1,2],filenam:2,files_list:2,final_activ:3,find:2,find_data_typ:2,find_i3_fil:2,first:1,fisher:[1,3],fit:1,fit_scal:1,float32:2,fn:4,folder:2,follow:[1,5],format:2,former:[3,5,7],formula:1,forward:[1,3,4,5,6,7],found:[1,2],fraction:6,frame:2,frame_contains_classifi:2,frame_contains_retro:2,frame_has_kei:2,frame_is_montecarlo:2,free:1,from:[1,2,3,4,6],furnish:1,g:[1,2,3,4],gcd:2,gcd_dict:2,gcd_file:2,gcd_list:2,gcd_rescu:2,gcd_shuffl:2,gener:1,geospati:2,get:2,get_best_param:8,get_even_neutrino_indici:2,get_even_signal_background_indici:2,get_next_lr:[1,3,8],get_primary_particle_interaction_type_and_elast:2,getbestparam:[1,3],github:1,given:1,global:2,gnn:[0,2,4],gnn_reco:10,grad:1,grad_output:1,gradient:1,grant:1,graph:[1,2,3,4,5,6],graph_build:[0,5,10],graphbuild:[4,5],ha:[1,2,6],handi:2,handl:2,handler:2,has_extens:2,have:[1,3],herebi:1,hidden:6,hidden_s:[3,7],holder:1,homophili:4,hook:[3,5,7],http:[1,4],i3:2,i3_fil:2,i3_list:2,i3_shuffl:2,i3extractor:[0,10],i3extractorcollect:2,i3featureextractor:2,i3retroextractor:2,i3truthextractor:2,i:[1,2,3,6],icecub:5,icecube86:[0,2,4],id:2,ignor:[3,5,7],imag:2,implement:[1,2,6],implent:[1,5,7],impli:1,impos:2,inabl:2,includ:1,index:[2,9],index_column:2,indic:3,indici:[1,2],inf:1,inform:2,ingest:5,inherit:[1,5,7],input:[1,2,3,4,5,6,7],input_fil:2,ins:5,instanc:[3,5,7],instead:[1,3,5,7],integ:6,interact:2,interaction_typ:2,intermedi:6,invoc:4,is_empti:2,is_gcd_fil:2,is_i3_fil:2,is_pulse_map:2,issu:2,its:2,iv:1,just:[1,2],k:[1,3],kappa:[1,3],kei:2,kera:1,kind:1,knn_col:3,knngraphbuild:4,kwarg:[1,3],l1580:1,l1617:1,label:[3,6],larg:1,latter:[3,5,7],layer:[0,3,6,10],layer_size_scal:6,legaci:[0,10],legacyangularreconstruct:3,legacyvonmisesfisherloss:3,len:2,level:3,liabil:1,liabl:1,licens:1,like:[1,4],limit:1,list:[2,4,5],load:2,log:1,log_cmk_approx:1,log_cmk_exact:1,log_cosh:3,logcmk:1,logcoshloss:1,loss:[1,3,4],loss_func:[1,3,8],loss_funct:[0,3,7,10],lossfunct:[1,3,7],m:1,mai:5,make:[2,4],make_dataload:1,make_train_validation_dataload:[1,8],malform:2,manag:2,mani:1,map:2,map_async:2,martin:6,master:1,match:[0,2],max:1,max_dictionary_s:2,max_epoch:[1,3,8],max_lr:[1,3,8],maximum:2,mc:2,mciniceprimari:2,mean:2,measur:4,member:4,merchant:1,merg:[1,2],metric:[1,3,8],min:[1,3,8],min_delta:[1,3,8],minh:6,mise:[1,3],mit:1,mode:[1,3,8],model:[0,1,2,3,10],moder:1,modifi:1,modul:[9,10],montecarlo:2,more:2,mryab:1,multipl:2,multipledatabasestrain:8,multipledatasetstrain:1,must:[1,3],n:[1,3],n_epoch:[1,3,8],n_featur:3,n_intermedi:3,n_label:3,n_output:3,name:[2,3],nb_input:[3,5,6,7],nb_intermedi:6,nb_nearest_neighbour:4,nb_neighbor:1,nb_output:[5,6],nearest:3,necessari:2,need:[1,3,5,7],needs_input_grad:1,neighbor:3,neither:2,network:3,neutral:2,nn:[1,3,4,5,6,7],node:[2,4,6],non:1,none:[1,2,3,4,5,8],noninfring:1,normal:3,notic:[1,4],num_training_batch:1,num_validation_batch:1,num_work:[1,8],number:[1,2,3,6,7],numer:1,numpi:2,object:[1,2,3,5,8],obtain:1,oerso:6,om_kei:2,omit:2,one:[2,3,5,7],open:2,oper:1,optim:[1,3,8],option:[1,2,3,4,5,6],order:[4,5],origin:[0,10],other:1,otherwis:1,ouput:3,out:[1,2],outdir:2,output:[1,3,6],output_column_nam:[1,3,8],output_count:2,overrid:4,overridden:[1,3,5,7],own:2,p:1,packag:10,pad:2,padding_valu:2,page:9,pairwise_shuffl:2,panda:2,paper:1,parallel:2,param:[1,3],paramet:[1,2,3,4,5,6],particl:2,particular:1,pass:[1,2,3,4,5,6,7],path:2,path_to_tmp:2,patienc:[1,3,8],percentag:[1,3,8],perform:[1,2,3,5,7],permiss:1,permit:1,persistent_work:[1,8],person:1,physic:2,pid:2,piecewiselinearschedul:[1,3,8],plane:1,pleas:2,pmt_area:[2,5],portion:1,position_i:2,position_x:2,position_z:2,post_processing_method:[1,3,8],pred:[4,7],predict:[1,3,6],predictor:[1,3,8],prepar:1,preprocess:[2,5],present:2,primari:2,probabl:1,process:2,properti:[5,6,7],provid:1,publish:1,puls:2,pulse_map:2,pulse_map_column:2,pulsemap:[1,2,8],pulsemap_t:2,purpos:1,py:1,pytorch:2,quantiti:[2,3,4],queri:2,r:1,rasmu:6,rde:[2,5],read:[2,5],recip:[3,5,7],reco:2,reconstruct:[0,4],recurs:2,reduct:[1,3],regist:[3,5,7],reimplement:[0,10],relat:2,relev:2,repes:3,replica:2,repres:1,represent:3,requir:[1,2],restrict:1,result:[1,8],retriev:1,retro:2,retro_big:2,retro_column:2,retroreco:2,return_el:1,right:1,run:[2,3,5,7],ryabinin:1,s:[0,2,6],same:[5,7],save:[1,2],save_result:[1,8],save_to_sql:2,scalar:[1,3,4],scale:[1,6],scaler:[3,5],schedul:[1,3,8],search:[2,9],sec:1,see:[1,4,5],select:[1,2,8],self:[2,4,5],sell:1,sequenc:1,sequenti:2,seri:2,set:2,set_fil:2,sever:2,shall:1,shape:[1,3,4],should:[1,3,5,7],shuffl:2,silent:[2,3,5,7],sim_typ:2,similar:1,simul:2,sinc:[3,5,7],sine:3,singl:[2,3],size:6,small:1,so:1,softwar:1,sourc:[0,1,2,3,4,5,6,7,8],space:1,sparsetensor:1,special:4,specialis:2,specif:[1,5],specifi:2,sphere:[1,3],spite:1,sqlite3:2,sqlite:2,sqlite_dataconvert:[0,10],sqlite_dataset:[0,10],sqlitedataconvert:2,sqlitedataset:2,sr:2,srtinicepuls:2,stackoverflow:4,stage:2,standard:3,start:2,start_lr:[1,3,8],stble:1,step:[1,3,8],store:[1,3],str:[1,2,3,4,5,7],string:2,subclass:[1,3,5,7],subject:1,sublicens:1,submit:2,submodul:10,subpackag:10,substanti:1,suggest:1,sum:4,sure:2,syntax:[1,5,7],t:[1,3],tabl:2,table_nam:2,tag:[1,8],take:[3,5,7],target:[1,3,8],target_label:[3,7],target_scal:3,task:[0,3,4],team:1,temporari:2,tensor:[0,1,3,4,6,7],term:[1,3],them:[3,5,7],therebi:2,thi:[1,2,3,4,5,6,7],thing:2,through:1,time:2,torch:[0,1,2,3,4,5,6,7],torch_geometr:[1,4,5,6,7],torch_spars:1,tort:1,train:[0,1,3,4,5,6,7],trainer:[0,1,3,4],training_dataload:[1,3,8],training_dataset:8,training_dataset_length:[1,3],training_load:1,transform_output:[1,3],truth:[1,2,8],truth_big:2,truth_column:2,truth_tabl:2,tupl:[1,2,4],two:2,type:[1,2,3,4,5,6],union:[1,4,7],unit:[1,3],us:[1,2,3,5],usual:3,util:10,utilis:1,v2:1,valid:1,validation_dataload:[1,3,8],validation_load:1,valu:[1,2],variabl:4,vector:[1,3],verbos:[2,4],version:1,vmf_loss:1,von:[1,3],vonmises_sinecosine_loss:3,vonmisesfisch:3,vonmisesfish:3,vonmisesfisher2dloss:1,vonmisesfisherloss:1,w:1,warranti:1,weight:[1,3],well:4,were:1,what:6,where:[1,2,3],whether:[1,2,3],which:[1,2],whom:1,within:[3,5,7],without:1,worker:2,written:2,x:[0,1,3,4,7],xyzt:4,y:3,yield:1,you:1,z:3,zenith:[2,3]},titles:["gnn_reco package","gnn_reco.components package","gnn_reco.data package","gnn_reco.legacy package","gnn_reco.models package","gnn_reco.models.detector package","gnn_reco.models.gnn package","gnn_reco.models.task package","gnn_reco.models.training package","Welcome to gnn-reco\u2019s documentation!","src"],titleterms:{callback:8,compon:1,constant:2,content:[0,1,2,3,4,5,6,7,8],convnet:6,data:2,dataconvert:2,detector:5,document:9,dynedg:6,gnn:[6,9],gnn_reco:[0,1,2,3,4,5,6,7,8],graph_build:4,i3extractor:2,icecube86:5,indic:9,layer:1,legaci:3,loss_funct:1,model:[4,5,6,7,8],modul:[0,1,2,3,4,5,6,7,8],origin:3,packag:[0,1,2,3,4,5,6,7,8],reco:9,reconstruct:7,reimplement:3,s:9,sqlite_dataconvert:2,sqlite_dataset:2,src:10,submodul:[0,1,2,3,4,5,6,7,8],subpackag:[0,4],tabl:9,task:7,train:8,trainer:8,util:[0,1,2,4,8],welcom:9}})