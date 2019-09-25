Vagrant.configure(2) do |config|
      config.vm.provider "virtualbox" do |vb|
        vb.name = "softwaredesign"
        vb.memory = "4096"
      end
      config.vm.box = "bento/centos-7.4"
      config.vm.hostname = 'sd2019'
      config.vm.network "private_network", ip: "192.168.100.201"

      # setup network
      config.vm.provision :shell, inline: <<-SHELL
      for interface in $(grep 'NM_CONTROLLED=no' /etc/sysconfig/network-scripts/ifcfg-* -l)
      do
        sudo sed -i -e 's/NM_CONTROLLED=no/NM_CONTROLLED=yes/' $interface
        sudo ifdown $interface
        sudo ifup $interface
      done
      SHELL

      # install azure cli
      config.vm.provision :shell, inline: <<-SHELL
        sudo yum install -y git
        sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
        sudo sh -c 'echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo'
        sudo yum install -y azure-cli
      SHELL

      # install node
      config.vm.provision :shell, inline: <<-SHELL
        curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
        yum install -y gcc-c++ make
        yum install -y nodejs
      SHELL

      # clone project
      config.vm.provision :shell, inline: <<-SHELL
        git clone https://github.com/kudarizakawonobore/softwaredesign201911.git
      SHELL

end
