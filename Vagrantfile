Vagrant.require_version ">= 1.9.2"

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
  config.vm.box = "ubuntu/trusty64"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "10.0.0.10"
  # Add another bridged network, which allows communication with local area network
  config.vm.network "public_network"
  # Map specific ports onto host
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.hostname = "hot-board"
  config.hostsupdater.aliases = ["hot-board.jawg.io.local"]

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

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
    GALAXY=/usr/local/bin/ansible-galaxy
    echo '#!/usr/bin/env bash
    /usr/bin/ansible-galaxy "$@"
    exit 0
    ' | sudo tee $GALAXY
    sudo chmod 0755 $GALAXY
  SCRIPT

  config.vm.provision "ansible_local" do |ansible|
    ansible.groups = {
      'hot-board' => ['default']
    }
    ansible.playbook = "site.yml"
    ansible.galaxy_role_file = "requirements.yml"
    ansible.install = "false"

  end
end
