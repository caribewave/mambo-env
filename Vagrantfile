Vagrant.require_version ">= 2.0.2"

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "centos/7"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "10.0.0.10"
  # Add another bridged network, which allows communication with local area network
  config.vm.network "public_network"
  # Map specific ports onto host
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.hostname = "mambo"
  
  # HostUpdater plugin
  config.hostsupdater.aliases = ["mambo.jawg.io.local"]
  
  
  # VBGuest plugin
  # set auto_update to false, if you do NOT want to check the correct 
  # additions version when booting this machine
  config.vbguest.auto_update = true
  
  # do NOT download the iso file from a webserver
  config.vbguest.no_remote = true

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "guest/opt", "/opt/mambo"
  # config.vm.synced_folder "guest/etc", "/etc/mambo"
  # config.vm.synced_folder "guest/log", "/var/log"
  config.vm.synced_folder "ansible", "/vagrant/ansible"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true
    # Customize the amount of memory on the VM:
    vb.memory = "2048"
    vb.customize ["modifyvm", :id, "--nictype1", "virtio"]
  end

  # Patch for https://github.com/mitchellh/vagrant/issues/6793
  config.vm.provision :shell, inline: <<-SCRIPT
    sudo yum install -y ansible
  SCRIPT

  config.vm.provision "ansible_local" do |ansible|
  ansible.groups = {
      'mambo' => ['all']
  }
  ansible.playbook = "ansible/site.yml"
  end
end