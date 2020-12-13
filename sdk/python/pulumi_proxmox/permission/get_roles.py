# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = [
    'GetRolesResult',
    'AwaitableGetRolesResult',
    'get_roles',
]

@pulumi.output_type
class GetRolesResult:
    """
    A collection of values returned by getRoles.
    """
    def __init__(__self__, id=None, privileges=None, role_ids=None, specials=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if privileges and not isinstance(privileges, list):
            raise TypeError("Expected argument 'privileges' to be a list")
        pulumi.set(__self__, "privileges", privileges)
        if role_ids and not isinstance(role_ids, list):
            raise TypeError("Expected argument 'role_ids' to be a list")
        pulumi.set(__self__, "role_ids", role_ids)
        if specials and not isinstance(specials, list):
            raise TypeError("Expected argument 'specials' to be a list")
        pulumi.set(__self__, "specials", specials)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def privileges(self) -> Sequence[Sequence[str]]:
        return pulumi.get(self, "privileges")

    @property
    @pulumi.getter(name="roleIds")
    def role_ids(self) -> Sequence[str]:
        return pulumi.get(self, "role_ids")

    @property
    @pulumi.getter
    def specials(self) -> Sequence[bool]:
        return pulumi.get(self, "specials")


class AwaitableGetRolesResult(GetRolesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRolesResult(
            id=self.id,
            privileges=self.privileges,
            role_ids=self.role_ids,
            specials=self.specials)


def get_roles(opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetRolesResult:
    """
    Use this data source to access information about an existing resource.
    """
    __args__ = dict()
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('proxmox:Permission/getRoles:getRoles', __args__, opts=opts, typ=GetRolesResult).value

    return AwaitableGetRolesResult(
        id=__ret__.id,
        privileges=__ret__.privileges,
        role_ids=__ret__.role_ids,
        specials=__ret__.specials)
