# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['Hosts']


class Hosts(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 entries: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['HostsEntryArgs']]]]] = None,
                 node_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Create a Hosts resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['HostsEntryArgs']]]] entries: The host entries
        :param pulumi.Input[str] node_name: The node name
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if entries is None:
                raise TypeError("Missing required property 'entries'")
            __props__['entries'] = entries
            if node_name is None:
                raise TypeError("Missing required property 'node_name'")
            __props__['node_name'] = node_name
            __props__['addresses'] = None
            __props__['digest'] = None
            __props__['hostnames'] = None
        super(Hosts, __self__).__init__(
            'proxmox:System/hosts:Hosts',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            addresses: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
            digest: Optional[pulumi.Input[str]] = None,
            entries: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['HostsEntryArgs']]]]] = None,
            hostnames: Optional[pulumi.Input[Sequence[pulumi.Input[Sequence[pulumi.Input[str]]]]]] = None,
            node_name: Optional[pulumi.Input[str]] = None) -> 'Hosts':
        """
        Get an existing Hosts resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] addresses: The addresses
        :param pulumi.Input[str] digest: The SHA1 digest
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['HostsEntryArgs']]]] entries: The host entries
        :param pulumi.Input[Sequence[pulumi.Input[Sequence[pulumi.Input[str]]]]] hostnames: The hostnames
        :param pulumi.Input[str] node_name: The node name
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["addresses"] = addresses
        __props__["digest"] = digest
        __props__["entries"] = entries
        __props__["hostnames"] = hostnames
        __props__["node_name"] = node_name
        return Hosts(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def addresses(self) -> pulumi.Output[Sequence[str]]:
        """
        The addresses
        """
        return pulumi.get(self, "addresses")

    @property
    @pulumi.getter
    def digest(self) -> pulumi.Output[str]:
        """
        The SHA1 digest
        """
        return pulumi.get(self, "digest")

    @property
    @pulumi.getter
    def entries(self) -> pulumi.Output[Sequence['outputs.HostsEntry']]:
        """
        The host entries
        """
        return pulumi.get(self, "entries")

    @property
    @pulumi.getter
    def hostnames(self) -> pulumi.Output[Sequence[Sequence[str]]]:
        """
        The hostnames
        """
        return pulumi.get(self, "hostnames")

    @property
    @pulumi.getter(name="nodeName")
    def node_name(self) -> pulumi.Output[str]:
        """
        The node name
        """
        return pulumi.get(self, "node_name")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

