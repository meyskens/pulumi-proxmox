# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables
from . import outputs

__all__ = [
    'ContainerClone',
    'ContainerConsole',
    'ContainerCpu',
    'ContainerDisk',
    'ContainerInitialization',
    'ContainerInitializationDns',
    'ContainerInitializationIpConfig',
    'ContainerInitializationIpConfigIpv4',
    'ContainerInitializationIpConfigIpv6',
    'ContainerInitializationUserAccount',
    'ContainerMemory',
    'ContainerNetworkInterface',
    'ContainerOperatingSystem',
]

@pulumi.output_type
class ContainerClone(dict):
    def __init__(__self__, *,
                 vm_id: int,
                 datastore_id: Optional[str] = None,
                 node_name: Optional[str] = None):
        pulumi.set(__self__, "vm_id", vm_id)
        if datastore_id is not None:
            pulumi.set(__self__, "datastore_id", datastore_id)
        if node_name is not None:
            pulumi.set(__self__, "node_name", node_name)

    @property
    @pulumi.getter(name="vmId")
    def vm_id(self) -> int:
        return pulumi.get(self, "vm_id")

    @property
    @pulumi.getter(name="datastoreId")
    def datastore_id(self) -> Optional[str]:
        return pulumi.get(self, "datastore_id")

    @property
    @pulumi.getter(name="nodeName")
    def node_name(self) -> Optional[str]:
        return pulumi.get(self, "node_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerConsole(dict):
    def __init__(__self__, *,
                 enabled: Optional[bool] = None,
                 tty_count: Optional[int] = None,
                 type: Optional[str] = None):
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if tty_count is not None:
            pulumi.set(__self__, "tty_count", tty_count)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="ttyCount")
    def tty_count(self) -> Optional[int]:
        return pulumi.get(self, "tty_count")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerCpu(dict):
    def __init__(__self__, *,
                 architecture: Optional[str] = None,
                 cores: Optional[int] = None,
                 units: Optional[int] = None):
        if architecture is not None:
            pulumi.set(__self__, "architecture", architecture)
        if cores is not None:
            pulumi.set(__self__, "cores", cores)
        if units is not None:
            pulumi.set(__self__, "units", units)

    @property
    @pulumi.getter
    def architecture(self) -> Optional[str]:
        return pulumi.get(self, "architecture")

    @property
    @pulumi.getter
    def cores(self) -> Optional[int]:
        return pulumi.get(self, "cores")

    @property
    @pulumi.getter
    def units(self) -> Optional[int]:
        return pulumi.get(self, "units")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerDisk(dict):
    def __init__(__self__, *,
                 datastore_id: Optional[str] = None):
        if datastore_id is not None:
            pulumi.set(__self__, "datastore_id", datastore_id)

    @property
    @pulumi.getter(name="datastoreId")
    def datastore_id(self) -> Optional[str]:
        return pulumi.get(self, "datastore_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitialization(dict):
    def __init__(__self__, *,
                 dns: Optional['outputs.ContainerInitializationDns'] = None,
                 hostname: Optional[str] = None,
                 ip_configs: Optional[Sequence['outputs.ContainerInitializationIpConfig']] = None,
                 user_account: Optional['outputs.ContainerInitializationUserAccount'] = None):
        if dns is not None:
            pulumi.set(__self__, "dns", dns)
        if hostname is not None:
            pulumi.set(__self__, "hostname", hostname)
        if ip_configs is not None:
            pulumi.set(__self__, "ip_configs", ip_configs)
        if user_account is not None:
            pulumi.set(__self__, "user_account", user_account)

    @property
    @pulumi.getter
    def dns(self) -> Optional['outputs.ContainerInitializationDns']:
        return pulumi.get(self, "dns")

    @property
    @pulumi.getter
    def hostname(self) -> Optional[str]:
        return pulumi.get(self, "hostname")

    @property
    @pulumi.getter(name="ipConfigs")
    def ip_configs(self) -> Optional[Sequence['outputs.ContainerInitializationIpConfig']]:
        return pulumi.get(self, "ip_configs")

    @property
    @pulumi.getter(name="userAccount")
    def user_account(self) -> Optional['outputs.ContainerInitializationUserAccount']:
        return pulumi.get(self, "user_account")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitializationDns(dict):
    def __init__(__self__, *,
                 domain: Optional[str] = None,
                 server: Optional[str] = None):
        if domain is not None:
            pulumi.set(__self__, "domain", domain)
        if server is not None:
            pulumi.set(__self__, "server", server)

    @property
    @pulumi.getter
    def domain(self) -> Optional[str]:
        return pulumi.get(self, "domain")

    @property
    @pulumi.getter
    def server(self) -> Optional[str]:
        return pulumi.get(self, "server")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitializationIpConfig(dict):
    def __init__(__self__, *,
                 ipv4: Optional['outputs.ContainerInitializationIpConfigIpv4'] = None,
                 ipv6: Optional['outputs.ContainerInitializationIpConfigIpv6'] = None):
        if ipv4 is not None:
            pulumi.set(__self__, "ipv4", ipv4)
        if ipv6 is not None:
            pulumi.set(__self__, "ipv6", ipv6)

    @property
    @pulumi.getter
    def ipv4(self) -> Optional['outputs.ContainerInitializationIpConfigIpv4']:
        return pulumi.get(self, "ipv4")

    @property
    @pulumi.getter
    def ipv6(self) -> Optional['outputs.ContainerInitializationIpConfigIpv6']:
        return pulumi.get(self, "ipv6")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitializationIpConfigIpv4(dict):
    def __init__(__self__, *,
                 address: Optional[str] = None,
                 gateway: Optional[str] = None):
        if address is not None:
            pulumi.set(__self__, "address", address)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)

    @property
    @pulumi.getter
    def address(self) -> Optional[str]:
        return pulumi.get(self, "address")

    @property
    @pulumi.getter
    def gateway(self) -> Optional[str]:
        return pulumi.get(self, "gateway")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitializationIpConfigIpv6(dict):
    def __init__(__self__, *,
                 address: Optional[str] = None,
                 gateway: Optional[str] = None):
        if address is not None:
            pulumi.set(__self__, "address", address)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)

    @property
    @pulumi.getter
    def address(self) -> Optional[str]:
        return pulumi.get(self, "address")

    @property
    @pulumi.getter
    def gateway(self) -> Optional[str]:
        return pulumi.get(self, "gateway")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerInitializationUserAccount(dict):
    def __init__(__self__, *,
                 keys: Optional[Sequence[str]] = None,
                 password: Optional[str] = None):
        if keys is not None:
            pulumi.set(__self__, "keys", keys)
        if password is not None:
            pulumi.set(__self__, "password", password)

    @property
    @pulumi.getter
    def keys(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "keys")

    @property
    @pulumi.getter
    def password(self) -> Optional[str]:
        return pulumi.get(self, "password")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerMemory(dict):
    def __init__(__self__, *,
                 dedicated: Optional[int] = None,
                 swap: Optional[int] = None):
        if dedicated is not None:
            pulumi.set(__self__, "dedicated", dedicated)
        if swap is not None:
            pulumi.set(__self__, "swap", swap)

    @property
    @pulumi.getter
    def dedicated(self) -> Optional[int]:
        return pulumi.get(self, "dedicated")

    @property
    @pulumi.getter
    def swap(self) -> Optional[int]:
        return pulumi.get(self, "swap")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerNetworkInterface(dict):
    def __init__(__self__, *,
                 name: str,
                 bridge: Optional[str] = None,
                 enabled: Optional[bool] = None,
                 mac_address: Optional[str] = None,
                 rate_limit: Optional[float] = None,
                 vlan_id: Optional[int] = None):
        pulumi.set(__self__, "name", name)
        if bridge is not None:
            pulumi.set(__self__, "bridge", bridge)
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if mac_address is not None:
            pulumi.set(__self__, "mac_address", mac_address)
        if rate_limit is not None:
            pulumi.set(__self__, "rate_limit", rate_limit)
        if vlan_id is not None:
            pulumi.set(__self__, "vlan_id", vlan_id)

    @property
    @pulumi.getter
    def name(self) -> str:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def bridge(self) -> Optional[str]:
        return pulumi.get(self, "bridge")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="macAddress")
    def mac_address(self) -> Optional[str]:
        return pulumi.get(self, "mac_address")

    @property
    @pulumi.getter(name="rateLimit")
    def rate_limit(self) -> Optional[float]:
        return pulumi.get(self, "rate_limit")

    @property
    @pulumi.getter(name="vlanId")
    def vlan_id(self) -> Optional[int]:
        return pulumi.get(self, "vlan_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContainerOperatingSystem(dict):
    def __init__(__self__, *,
                 template_file_id: str,
                 type: Optional[str] = None):
        pulumi.set(__self__, "template_file_id", template_file_id)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="templateFileId")
    def template_file_id(self) -> str:
        return pulumi.get(self, "template_file_id")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


