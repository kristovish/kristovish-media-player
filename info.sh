#!/bin/bash

echo ""
echo -e "\e[34mCurrent date:\e[0m $(date +"%d/%m/%Y")"
echo ""
echo -e "\e[34mOperating System Information:\e[0m"
cat /etc/os-release
echo ""
echo -e "\e[34mCPU Information:\e[0m"
lscpu
echo ""
echo -e "\e[34mMemory Information:\e[0m"
free -h
echo ""
echo -e "\e[34mDisk Usage Information:\e[0m"
df -h
echo ""
echo -e "\e[32mCurrent time: $(date +"%T")\e[33m"
echo ""
echo -e "\e[34m                                                                                     
# #    # ######  ####     #    # #####  #  ####  #####  ####  #    # #  ####  #    # 
# ##   # #      #    #    #   #  #    # # #        #   #    # #    # # #      #    # 
# # #  # #####  #    #    ####   #    # #  ####    #   #    # #    # #  ####  ###### 
# #  # # #      #    #    #  #   #####  #      #   #   #    # #    # #      # #    # 
# #   ## #      #    #    #   #  #   #  # #    #   #   #    #  #  #  # #    # #    # 
# #    # #       ####     #    # #    # #  ####    #    ####    ##   #  ####  #    # 
                                                                                     
\e[34m"

